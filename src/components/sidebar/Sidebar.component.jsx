import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import SidebarContainer, { TitleContainer } from "./Sidebar.styles";

import CategoriesList from "./../CategoriesList/CategoriesList.component";

const Sidebar = ({ filters }) => {
  return (
    <SidebarContainer>
      <TitleContainer>Filters {`(${filters.length})`}</TitleContainer>
      <CategoriesList />
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  filters: PropTypes.array.isRequired,
};

const mapStateToProps = ({ products: { filters } }) => {
  return {
    filters,
  };
};
export default connect(mapStateToProps)(Sidebar);
