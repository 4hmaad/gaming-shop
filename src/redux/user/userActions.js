import userTypes from "./userTypes";

const SigningIn = () => {
  return {
    type: userTypes.SIGNING_IN,
  };
};

/**
 * TODO: make a request to firebase auth
 */
const SignIn = () => (dispatch) => {
  dispatch(SigningIn());

  // code
};
