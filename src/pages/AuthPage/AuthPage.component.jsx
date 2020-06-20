import React from "react";
import AuthPageContainer, {
  TitleContainer,
  FormsContainer,
} from "./AuthPage.styles";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn.component";

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
