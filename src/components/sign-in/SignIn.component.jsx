import React, { useState } from "react";

import { auth } from "../../firebase/firebase.utils";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import SignInFormContainer, { TitleContainer } from "./SignIn.styles";

const SignIn = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <SignInFormContainer onSubmit={onSubmitForm}>
      <TitleContainer>Have Signed Up Already?</TitleContainer>
      <TitleContainer small>Sign In with Email or Google</TitleContainer>
      <FormInput
        name="email"
        type="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <FormInput
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <CustomButton primary>Sign In</CustomButton>
    </SignInFormContainer>
  );
};

export default SignIn;
