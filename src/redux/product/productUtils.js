export const addFilterToFiltersArray = (filterToAdd, filtersArray) => {
  filterToAdd = filterToAdd.toLowerCase();

  filtersArray.push(filterToAdd);
  return filtersArray;
};

export const removeFilterFromFiltersArray = (filterToRemove, filtersArray) => {
  filterToRemove = filterToRemove.toLowerCase();
  return filtersArray.filter((filter) => filter !== filterToRemove);
};
