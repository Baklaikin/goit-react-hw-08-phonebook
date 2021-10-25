// import s from "components/FilterContacts/FilterContacts.module.css";
import { setFilterField } from "redux/phoneBook/phoneBook-actions";
import { connect } from "react-redux";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 20px;
`;

const Span = styled.span`
  margin-bottom: 10px;
`;

function FilterContacts({ setFilter, filter }) {
  return (
    <Form>
      <Label>
        <Span>Find contacts by name</Span>
        <input
          type="text"
          name="filter"
          autoComplete="off"
          value={filter}
          onChange={(event) => {
            const data = event.target.value;
            setFilter(data);
          }}
        />
      </Label>
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
