import React, { useState } from "react";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

import SignUpFormContainer, { TitleContainer } from "./SignUp.styles";

import { auth, createUserDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      alert("Password aren't matching");
      return;
    }

    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(
        formValues.email,
        formValues.password
      );

      await createUserDocument(userAuth, {
        displayName: formValues.displayName,
      });

      setFormValues({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ [name]: value });
  };

  return (
    <SignUpFormContainer onSubmit={onFormSubmit}>
      <TitleContainer>Haven't Signed Up Yet?</TitleContainer>
      <TitleContainer small>Sign Up With Email</TitleContainer>
      <FormInput
        name="displayName"
        value={formValues.displayName}
        onChange={handleChange}
        placeholder="Name"
      />
      <FormInput
        name="email"
        type="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <FormInput
        name="password"
        value={formValues.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <FormInput
        name="confirmPassword"
        value={formValues.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      <CustomButton primary>Sign Up</CustomButton>
    </SignUpFormContainer>
  );
};

export default SignUp;
