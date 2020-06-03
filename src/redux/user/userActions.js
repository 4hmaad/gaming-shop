export const setSignedUser = (signedUser) => {
  return {
    type: "SET_SIGNED_USER",
    payload: signedUser,
  };
};
