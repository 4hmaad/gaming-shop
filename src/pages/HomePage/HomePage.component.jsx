import React from "react";
import HomePageContainer, {
  TopBarContainer,
  TitleContainer,
  ContentContainer
} from "./HomePage.styles";

// import FormInput from "../../components/FormInput/FormInput.component";
import Filters from "../../components/Filters/Filters.component";
import Products from "../../components/Products/Products.component";

const HomePage = () => {
  return (
    <HomePageContainer>
      <TopBarContainer>
        <TitleContainer>Browse</TitleContainer>

        {/* <FormInput
          name='search'
          onChange={handleSearchChange}
          placeholder='Search'
        /> */}
      </TopBarContainer>
      <ContentContainer>
        <Filters />
        <Products />
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
