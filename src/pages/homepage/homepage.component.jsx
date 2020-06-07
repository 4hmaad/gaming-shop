import React from "react";
import { connect } from "react-redux";

import { updateSearchQuery } from "./../../redux/product/productActions";

import HomePageContainer, {
  TopBarContainer,
  TitleContainer,
  ContentContainer,
} from "./Homepage.styles";

import FormInput from "../../components/form-input/FormInput.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Products from "../../components/products/Products.component";

const HomePage = ({ updateSearchQuery }) => {
  const handleSearchChange = (e) => {
    const { value } = e.target;

    updateSearchQuery(value);
  };

  return (
    <HomePageContainer>
      <TopBarContainer>
        <TitleContainer>Browse</TitleContainer>

        <FormInput
          name="search"
          onChange={handleSearchChange}
          placeholder="Search"
        />
      </TopBarContainer>
      <ContentContainer>
        <Sidebar />
        <Products />
      </ContentContainer>
    </HomePageContainer>
  );
};

export default connect(null, { updateSearchQuery })(HomePage);
