import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllContacts,
  fetchDelete,
} from "redux/phoneBook/phoneBook-operations";
import { getItems, getFilter } from "redux/phoneBook/phoneBook-selectors";
import authSelectors from "redux/auth/auth-selectors";
import { Button } from "@mui/material";

//Styles
const List = styled.ul`
  box-sizing: border-box;
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
  border: 1px solid #c2bfbf;
  border-radius: 4px;
  padding: 8px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0de;
  margin-bottom: 4px;
  padding-bottom: 4px;
  width: auto;
  color: grey;
`;

const Number = styled.span`
  margin-left: auto;
  margin-right: 20px;
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
            <Button
              variant="outlined"
              color="error"
              size="small"
              type="button"
              name="delete"
              onClick={() => dispatch(fetchDelete(id))}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
