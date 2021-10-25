import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAddContactToDb } from "redux/phoneBook/phoneBook-operations";
import { useSelector } from "react-redux";
import { getItems } from "redux/phoneBook/phoneBook-selectors";
import styled from "@emotion/styled";

//Styles
const Form = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

const FormInput = styled.input`
  margin-right: 15px;
`;

const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 120px;
  height: 20px;
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
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </FormLabel>
      <AddButton type="submit">Add to contacts</AddButton>
    </Form>
  );
}

export default PhoneForm;
