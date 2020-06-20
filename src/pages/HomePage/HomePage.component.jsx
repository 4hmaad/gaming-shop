import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { updateSearchQuery } from "../../redux/product/productActions";

import HomePageContainer, {
  TopBarContainer,
  TitleContainer,
  ContentContainer,
} from "./HomePage.styles";

import FormInput from "../../components/FormInput/FormInput.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import Products from "../../components/Products/Products.component";

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

HomePage.propTypes = {
  updateSearchQuery: PropTypes.func.isRequired,
};

export default connect(null, { updateSearchQuery })(HomePage);
