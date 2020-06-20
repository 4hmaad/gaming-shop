import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addFilter, removeFilter } from "./../../redux/product/productActions";

import CategoriesListContainer, {
  TitleContainer,
} from "./CategoriesList.styles";

const CategoriesList = (props) => {
  /** Actions */
  const { addFilter, removeFilter } = props;
  /** Products' State */
  const { filters } = props.products;

  const handleClick = (e) => {
    const category = e.target.innerText;

    e.target.classList.toggle("activeFilter");

    if (e.target.classList.contains("activeFilter")) {
      addFilter(category);
    } else {
      removeFilter(category);
    }
  };

  const renderCategories = () => {
    const categories = [
      "Action",
      "Adventures",
      "Racing",
      "Puzzle",
      "Shooting",
      "Strategy",
    ];

    return categories.map((category, idx) => {
      if (filters.includes(category.toLowerCase()))
        return (
          <li key={idx} onClick={handleClick} className="activeFilter">
            {category}
          </li>
        );
      else
        return (
          <li key={idx} onClick={handleClick}>
            {category}
          </li>
        );
    });
  };

  return (
    <Fragment>
      <TitleContainer>Categories</TitleContainer>
      <CategoriesListContainer>{renderCategories()}</CategoriesListContainer>
    </Fragment>
  );
};

CategoriesList.propTypes = {
  products: PropTypes.shape({
    filters: PropTypes.array.isRequired,
  }).isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps, { addFilter, removeFilter })(
  CategoriesList
);
