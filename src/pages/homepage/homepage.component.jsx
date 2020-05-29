import React from "react";

import HomePageContainer, {
  TopBarContainer,
  TitleContainer,
  ContentContainer,
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
      <ContentContainer>
        <Sidebar />
        <Directory />
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
