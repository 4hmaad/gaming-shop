import {
  addFilterToFiltersArray,
  removeFilterFromFiltersArray,
} from "./productUtils";

const INITIAL_STATE = {
  loading: null,
  data: [],
  filters: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHING_PRODUCTS":
      return { ...state, loading: true };
    case "FETCHED_PRODUCTS":
      return { ...state, loading: false, data: action.payload };
    case "ADD_FILTER":
      return {
        ...state,
        filters: addFilterToFiltersArray(action.payload, state.filters),
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        filters: removeFilterFromFiltersArray(action.payload, state.filters),
      };
    default:
      return state;
  }
};
