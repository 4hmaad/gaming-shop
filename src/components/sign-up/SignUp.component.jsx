import React, { Component } from "react";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import SignUpFormContainer, { TitleContainer } from "./SignUp.styles";

import { auth, createUserDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onFormSubmit = async (e) => {
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      alert("Password aren't matching");
      return;
    }

    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      await createUserDocument(userAuth, {
        displayName: this.state.displayName,
      });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
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
      <SignUpFormContainer onSubmit={this.onFormSubmit}>
        <TitleContainer>Haven't Signed Up Yet?</TitleContainer>
        <TitleContainer small>Sign Up With Email</TitleContainer>
        <FormInput
          name="displayName"
          value={this.state.displayName}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <FormInput
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
          required
        />
        <FormInput
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <FormInput
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          placeholder="Confirm Password"
        />
        <CustomButton primary>Sign Up</CustomButton>
      </SignUpFormContainer>
    );
  }
}

export default SignUp;
