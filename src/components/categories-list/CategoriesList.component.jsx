import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addFilter, removeFilter } from "./../../redux/product/productActions";

import CategoriesListContainer, {
  TitleContainer,
} from "./CategoriesList.styles";

const CategoriesList = ({ addFilter, removeFilter }) => {
  const handleClick = (e) => {
    const category = e.target.innerText;

    e.target.classList.toggle("activeFilter");

    if (e.target.classList.contains("activeFilter")) {
      addFilter(category);
    } else {
      removeFilter(category);
    }
  };

  return (
    <Fragment>
      <TitleContainer>Categories</TitleContainer>

      <CategoriesListContainer>
        <li onClick={handleClick}>Action</li>
        <li onClick={handleClick}>Adventures</li>
        <li onClick={handleClick}>Racing</li>
        <li onClick={handleClick}>Puzzle</li>
        <li onClick={handleClick}>Shooting</li>
        <li onClick={handleClick}>Strategy</li>
      </CategoriesListContainer>
    </Fragment>
  );
};
export default connect(null, { addFilter, removeFilter })(CategoriesList);
