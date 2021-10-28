import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAddContactToDb } from "redux/phoneBook/phoneBook-operations";
import { useSelector } from "react-redux";
import { getItems } from "redux/phoneBook/phoneBook-selectors";
import { Form, FormLabel, Div } from "components/PhoneForm/PhoneForm.styled";
import { Button } from "@mui/material";

function PhoneForm() {
  const [user, setUser] = useState({
    name: "",
    number: "",
  });
  const state = useSelector(getItems);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const data = e.currentTarget.value;
    const name = e.currentTarget.name;
    setUser((prev) => ({ ...prev, [name]: data }));
  };

  const addToContactsList = (e) => {
    e.preventDefault();
    const isInList = state.find((item) => item.number === user.number);
    if (isInList) {
      alert(`${user.name} is already in contacts`);
      return;
    }
    dispatch(fetchAddContactToDb(user));
    resetForm();
  };

  const resetForm = () => {
    setUser({
      name: "",
      number: "",
    });
  };

  return (
    <Form onSubmit={addToContactsList}>
      <Div>
        <FormLabel
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="primary"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={user.name}
          onChange={handleInputChange}
        />
        <FormLabel
          id="outlined-basic"
          label="Number"
          variant="outlined"
          color="primary"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={user.number}
          onChange={handleInputChange}
        />
      </Div>
      <Button variant="outlined" color="primary" size="medium" type="submit">
        Add to contacts
      </Button>
    </Form>
  );
}

export default PhoneForm;
