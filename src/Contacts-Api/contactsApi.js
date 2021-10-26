import axios from "axios";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function fetchAddContacts(data) {
  const { name, number } = data;
  const newContact = await axios.post(
    `/contacts`,
    {
      name: `${name}`,
      number: `${number}`,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return newContact;
}

export async function fetchDeleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}

export async function fetchEditContact(id) {
  const editedContact = axios.patch(`/contacts/${id}`);
  return editedContact;
}

export async function fetchRegister(data) {
  const { name, email, password } = data;
  const registerNewUser = await axios.post(
    `/user/signup`,
    {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return registerNewUser;
}

export async function fetchGetCurrent(data) {
  const fetchCurrentUser = await axios.get(`/users/current/${data.id}`);
  return fetchCurrentUser;
}

export async function fetchLogin() {
  const fetchLoginUser = await axios.post(`/user/login`);
  return fetchLoginUser;
}

export async function fetchLogout() {
  const fetchLogoutUser = await axios.post(`/user/login`);
  return fetchLogoutUser;
}
