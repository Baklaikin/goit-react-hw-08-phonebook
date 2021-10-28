import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllContacts,
  fetchDelete,
} from "redux/phoneBook/phoneBook-operations";
import { getItems, getFilter } from "redux/phoneBook/phoneBook-selectors";
import { Button } from "@mui/material";
import {
  List,
  ListItem,
  Number,
} from "components/ContactList/ContactList.styled";
import authSelectors from "redux/auth/auth-selectors";

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
