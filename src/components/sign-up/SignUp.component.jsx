import React from "react";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import SignUpContainer, { TitleContainer } from "./SignUp.styles";

const SignUp = () => (
  <SignUpContainer>
    <TitleContainer>Haven't Signed Up Yet?</TitleContainer>
    <TitleContainer small>Sign Up With Email</TitleContainer>
    <FormInput placeholder="Name" />
    <FormInput placeholder="Email" />
    <FormInput placeholder="Password" />
    <FormInput placeholder="Confirm Password" />
    <CustomButton primary>Sign Up</CustomButton>
  </SignUpContainer>
);

export default SignUp;
