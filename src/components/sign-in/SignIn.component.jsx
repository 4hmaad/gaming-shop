import React, { Component } from "react";

import { auth } from "../../firebase/firebase.utils";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import SignInFormContainer, { TitleContainer } from "./SignIn.styles";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmitForm = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInFormContainer onSubmit={this.onSubmitForm}>
        <TitleContainer>Have Signed Up Already?</TitleContainer>
        <TitleContainer small>Sign In with Email or Google</TitleContainer>
        <FormInput
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <CustomButton primary>Sign In</CustomButton>
      </SignInFormContainer>
    );
  }
}

export default SignIn;
