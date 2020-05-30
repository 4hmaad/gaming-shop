const INITIAL_STATE = {
  signedUser: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SIGNED_USER":
      return {
        ...state,
        signedUser: action.payload,
      };
    default:
      return state;
  }
};
