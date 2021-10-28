import { setFilterField } from "redux/phoneBook/phoneBook-actions";
import { connect } from "react-redux";
import { Form } from "components/FilterContacts/FilterContacts.styled";
import { TextField } from "@mui/material";

function FilterContacts({ setFilter, filter }) {
  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="Find contact by name"
        variant="outlined"
        color="error"
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={(event) => {
          const data = event.target.value;
          setFilter(data);
        }}
      />
    </Form>
  );
}

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (data) => dispatch(setFilterField(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
