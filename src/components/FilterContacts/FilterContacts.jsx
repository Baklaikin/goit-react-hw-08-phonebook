import { setFilterField } from "redux/phoneBook/phoneBook-actions";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

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
