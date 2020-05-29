import React from "react";
import AuthPageContainer, {
  TitleContainer,
  FormsContainer,
} from "./AuthPage.styles";

import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";
import GoogleSignIn from "../../components/google-sign-in/GoogleSignIn.component";

const AuthPage = () => (
  <AuthPageContainer>
    <TitleContainer>Authentication</TitleContainer>

    <FormsContainer>
      <SignUp />
      <SignIn />
      <GoogleSignIn />
    </FormsContainer>
  </AuthPageContainer>
);

export default AuthPage;
