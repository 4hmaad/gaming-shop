export const addFilterToFiltersArray = (filterToAdd, filtersArray) => {
  filterToAdd = filterToAdd.toLowerCase();
  return [...filtersArray, filterToAdd];
};

export const removeFilterFromFiltersArray = (filterToRemove, filtersArray) => {
  filterToRemove = filterToRemove.toLowerCase();
  return filtersArray.filter((filter) => filter !== filterToRemove);
};
