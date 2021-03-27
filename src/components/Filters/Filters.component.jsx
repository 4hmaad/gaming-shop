import React from "react";
import FiltersContainer, { TitleContainer } from "./Filters.styles";
import CategoriesList from "../CategoriesList/CategoriesList.component";
import create from "zustand";

export const useFiltersStore = create(set => ({
  filters: [],
  addFilter: filter =>
    set(state => {
      let updatedFilters = state.filters;
      updatedFilters.push(filter?.toLowerCase());
      return { ...state, filters: updatedFilters };
    }),
  removeFilter: filter =>
    set(state => ({
      ...state,
      filters: state.filters.filter(f => f !== filter?.toLowerCase())
    }))
}));

const Filters = () => {
  const { filters, addFilter, removeFilter } = useFiltersStore();

  const handleSelect = e => {
    const category = e.target.innerText;
    if (e.target.classList.contains("selected")) {
      removeFilter(category);
    } else {
      addFilter(category);
    }
    e.target.classList.toggle("selected");
  };

  return (
    <FiltersContainer>
      <TitleContainer>Filters {`(${filters.length})`}</TitleContainer>
      <CategoriesList onSelect={handleSelect} selectedCategories={filters} />
    </FiltersContainer>
  );
};

export default Filters;
