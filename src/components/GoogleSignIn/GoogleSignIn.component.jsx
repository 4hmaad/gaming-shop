import React from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import GoogleSignInContainer, { TitleContainer } from "./GoogleSignIn.styles";
import { useAuth } from "context/auth-context";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useAuth();
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

export default GoogleSignIn;
