const INITIAL_STATE = {
  signedUser: null,
  isSigningIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNING_IN":
      return {
        ...state,
        signedUser: null,
        isSigningIn: true,
      };
    case "SIGNED_IN":
      return {
        ...state,
        signedUser: action.payload,
        isSigningIn: false,
      };
    case "SIGNED_OUT":
      return {
        ...state,
        signedUser: null,
        isSigningIn: false,
      };
    default:
      return state;
  }
};
