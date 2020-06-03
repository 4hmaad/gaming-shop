import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/CustomButton.component";

import { setSignedUser } from "./../../redux/user/userActions";

import GoogleSignInContainer, { TitleContainer } from "./GoogleSignIn.styles";
import { signInWithGoogle } from "./../../firebase/firebase.utils";

const GoogleSignIn = (props) => {
  return (
    <GoogleSignInContainer>
      <TitleContainer>Can't Do Any of Them?</TitleContainer>
      <TitleContainer small>Sign In with Google</TitleContainer>

      <CustomButton secondary onClick={signInWithGoogle}>
        Sign In
      </CustomButton>
    </GoogleSignInContainer>
  );
};

export default connect(null, {
  setSignedUser,
})(GoogleSignIn);
