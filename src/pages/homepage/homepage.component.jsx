import React, { Fragment } from "react";

import HomePageContainer, {
  TopBarContainer,
  TitleContainer,
} from "./Homepage.styles";

import FormInput from "../../components/form-input/FormInput.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Directory from "../../components/directory/Directory.component";

const HomePage = () => {
  return (
    <HomePageContainer>
      <TopBarContainer>
        <TitleContainer>Browse</TitleContainer>

        <FormInput placeholder="Search" />
      </TopBarContainer>

      <Sidebar />
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
