import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAddContactToDb } from "redux/phoneBook/phoneBook-operations";
import { useSelector } from "react-redux";
import { getItems } from "redux/phoneBook/phoneBook-selectors";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

//Styles
const Form = styled.form`
  width: 320px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0de;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

const FormLabel = styled(TextField)`
  margin-bottom: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

//Function
function PhoneForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const state = useSelector(getItems);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const data = e.currentTarget.value;
    switch (e.currentTarget.name) {
      case "name":
        setName(data);
        break;
      case "number":
        setNumber(data);
        break;
      default:
        return;
    }
  };

  const addToContactsList = (e) => {
    e.preventDefault();
    const data = { name, number };
    const isInList = state.find((item) => item.number === data.number);
    if (isInList) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(fetchAddContactToDb(data));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={addToContactsList}>
      <Div>
        <FormLabel
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="error"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
        <FormLabel
          id="outlined-basic"
          label="Number"
          variant="outlined"
          color="error"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </Div>
      <Button variant="outlined" color="error" size="medium" type="submit">
        Add to contacts
      </Button>
    </Form>
  );
}

export default PhoneForm;
