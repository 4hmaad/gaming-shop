import React, { Fragment } from "react";

import CategoriesListContainer, {
  CategoriesTitleContainer,
  CategoriesItemContainer,
} from "./CategoriesList.styles";

const CategoriesList = () => {
  return (
    <Fragment>
      <CategoriesTitleContainer>Categories</CategoriesTitleContainer>

      <CategoriesListContainer>
        <CategoriesItemContainer>Action</CategoriesItemContainer>
        <CategoriesItemContainer>Adventures</CategoriesItemContainer>
        <CategoriesItemContainer>Racing</CategoriesItemContainer>
        <CategoriesItemContainer>Puzzle</CategoriesItemContainer>
        <CategoriesItemContainer>Shooter</CategoriesItemContainer>
        <CategoriesItemContainer>Strategy</CategoriesItemContainer>
      </CategoriesListContainer>
    </Fragment>
  );
};

export default CategoriesList;
