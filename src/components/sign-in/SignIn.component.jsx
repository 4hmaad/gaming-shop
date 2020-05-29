import React from "react";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import SignInContainer, { TitleContainer } from "./SignIn.styles";

const SignIn = () => (
  <SignInContainer>
    <TitleContainer>Have Signed Up Already?</TitleContainer>
    <TitleContainer small>Sign In with Email or Google</TitleContainer>
    <FormInput placeholder="Email" />
    <FormInput placeholder="Password" />
    <CustomButton primary>Sign In</CustomButton>
  </SignInContainer>
);

export default SignIn;
