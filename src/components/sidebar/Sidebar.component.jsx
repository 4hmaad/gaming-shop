import React from "react";

import SidebarContainer, { TitleContainer } from "./Sidebar.styles";

import CategoriesList from "./../categories-list/CategoriesList.component";

const Sidebar = () => (
  <SidebarContainer>
    <TitleContainer>Filters</TitleContainer>
    <CategoriesList />
  </SidebarContainer>
);

export default Sidebar;
