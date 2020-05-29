import React from "react";

import CustomButton from "../custom-button/CustomButton.component";

import GoogleSignInContainer, { TitleContainer } from "./GoogleSignIn.styles";

const GoogleSignIn = () => {
  return (
    <GoogleSignInContainer>
      <TitleContainer>Can't Do Any of Them?</TitleContainer>
      <TitleContainer small>Sign In with Google</TitleContainer>

      <CustomButton secondary>Sign In</CustomButton>
    </GoogleSignInContainer>
  );
};

export default GoogleSignIn;
