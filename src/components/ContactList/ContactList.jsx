import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllContacts,
  fetchDelete,
} from "redux/phoneBook/phoneBook-operations";
import { getItems, getFilter } from "redux/phoneBook/phoneBook-selectors";
import authSelectors from "redux/auth/auth-selectors";

//Styles
const List = styled.ul`
  width: 320px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  list-style: none;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 4px;
  width: auto;
`;

const Number = styled.span`
  margin-left: auto;
  margin-right: 20px;
`;

const DelBtn = styled.button`
  background-color: tomato;
  border-style: none;
  border-radius: 2px;
`;

const EditBtn = styled.button`
  background-color: tomato;
  border-style: none;
  border-radius: 2px;
  margin-left: 5px;
`;

//Function
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchAllContacts());
  }, [dispatch, isLoggedIn]);

  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {filtered.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: <Number>{number}</Number>
            <DelBtn
              type="button"
              name="delete"
              onClick={() => dispatch(fetchDelete(id))}
            >
              Delete
            </DelBtn>
            <EditBtn
              type="button"
              name="edit"
              // onClick={() => dispatch(fetchDelete(id))}
            >
              Edit
            </EditBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
