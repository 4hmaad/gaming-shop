import userTypes from "./userTypes";

export const setSignedUser = (signedUser) => {
  return {
    type: userTypes.SET_SIGNED_USER,
    payload: signedUser,
  };
};
