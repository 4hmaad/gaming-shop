import React, { Fragment } from "react";
import CategoriesListContainer, {
  TitleContainer
} from "./CategoriesList.styles";

const categories = [
  "Action",
  "Adventures",
  "Racing",
  "Puzzle",
  "Shooting",
  "Strategy"
];
const CategoriesList = ({ selectedCategories, onSelect }) => {
  return (
    <Fragment>
      <TitleContainer>Categories</TitleContainer>
      <CategoriesListContainer>
        {categories.map((category, idx) => {
          return (
            <li
              key={idx}
              onClick={onSelect}
              className={
                selectedCategories.includes(category) ? "selected" : ""
              }
            >
              {category}
            </li>
          );
        })}
      </CategoriesListContainer>
    </Fragment>
  );
};

export default CategoriesList;
