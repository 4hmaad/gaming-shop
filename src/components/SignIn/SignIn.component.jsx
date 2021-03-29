import React from "react";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import SignInFormContainer, { TitleContainer } from "./SignIn.styles";
import { useAuth } from "context/auth-context";
import { useFormik } from "formik";

const SignIn = () => {
  const { signIn } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async values => {
      try {
        await signIn({
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
    <SignInFormContainer onSubmit={formik.handleSubmit}>
      <TitleContainer>Have Signed Up Already?</TitleContainer>
      <TitleContainer small>Sign In with Email</TitleContainer>
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
      <CustomButton type='submit' primary>
        Sign In
      </CustomButton>
    </SignInFormContainer>
  );
};

export default SignIn;
