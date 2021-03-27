import React from "react";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import SignUpFormContainer, { TitleContainer } from "./SignUp.styles";
import { useAuth } from "./../../context/auth-context";
import { useFormik } from "formik";

const SignUp = () => {
  const { signUp } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async values => {
      try {
        if (values.password !== values.confirmPassword) {
          throw new Error("Password aren't matching");
        }
        await signUp({
          name: values.name,
          email: values.email,
          password: values.password
        });
      } catch (error) {
        console.error({ error: error.message });
        alert(error.message);
      }
    }
  });

  return (
    <SignUpFormContainer onSubmit={formik.handleSubmit}>
      <TitleContainer>Haven't Signed Up Yet?</TitleContainer>
      <TitleContainer small>Sign Up With Email</TitleContainer>
      <FormInput
        name='name'
        type='text'
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder='Name'
      />
      <FormInput
        name='email'
        type='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder='Email'
        required
      />
      <FormInput
        name='password'
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder='Password'
      />
      <FormInput
        name='confirmPassword'
        type='password'
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        placeholder='Confirm Password'
      />
      <CustomButton type='submit' primary>
        Sign Up
      </CustomButton>
    </SignUpFormContainer>
  );
};

export default SignUp;
