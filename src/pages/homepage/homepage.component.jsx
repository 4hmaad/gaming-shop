import React from "react";
import Header from "../../components/header/Header.component";

import HomePageContainer, {
  TopBarContainer,
  TitleContainer,
} from "./Homepage.styles";

import FormInput from "../../components/customInput/customInput.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import CategoryItem from "../../components/category-item/category-item.component";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />

      <TopBarContainer>
        <TitleContainer>Browse</TitleContainer>

        <FormInput placeholder="Search" />
      </TopBarContainer>

      <Sidebar />
      <CategoryItem />
    </HomePageContainer>
  );
};

export default HomePage;
