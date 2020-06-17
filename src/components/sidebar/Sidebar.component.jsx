import React from "react";
import { connect } from "react-redux";

import SidebarContainer, { TitleContainer } from "./Sidebar.styles";

import CategoriesList from "./../categories-list/CategoriesList.component";

const Sidebar = ({ filters }) => {
  console.log(filters);
  return (
    <SidebarContainer>
      <TitleContainer>Filters {`(${filters.length})`}</TitleContainer>
      <CategoriesList />
    </SidebarContainer>
  );
};
const mapStateToProps = ({ products: { filters } }) => {
  return {
    filters,
  };
};
export default connect(mapStateToProps)(Sidebar);
