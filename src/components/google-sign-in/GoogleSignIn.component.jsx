import React, { useEffect } from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/CustomButton.component";

import { setSignedUser } from "./../../redux/user/userActions";

import GoogleSignInContainer, { TitleContainer } from "./GoogleSignIn.styles";
import {
  signInWithGoogle,
  auth,
  createUserDocument,
} from "./../../firebase/firebase.utils";

const GoogleSignIn = (props) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (signedUser) => {
      props.setSignedUser(signedUser);

      if (signedUser) {
        const userRef = await createUserDocument(signedUser);
        userRef.onSnapshot((snapShot) => {
          let id = snapShot.id;
          console.table(snapShot.data());
          props.setSignedUser({
            id,
            ...snapShot.data(),
          });
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GoogleSignInContainer>
      <TitleContainer>Can't Do Any of Them?</TitleContainer>
      <TitleContainer small>Sign In with Google</TitleContainer>

      <CustomButton secondary onClick={signInWithGoogle}>
        Sign In
      </CustomButton>
    </GoogleSignInContainer>
  );
};

export default connect(null, {
  setSignedUser,
})(GoogleSignIn);
