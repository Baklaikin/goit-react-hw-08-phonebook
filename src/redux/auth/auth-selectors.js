const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;
const getToken = (state) => state.auth.token;
const getFetchingStatus = (state) => state.auth.isFetchingCurrUser;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getToken,
  getFetchingStatus,
};

export default authSelectors;
