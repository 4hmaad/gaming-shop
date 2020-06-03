const INITIAL_STATE = {
  loading: null,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHING_PRODUCTS":
      return { ...state, loading: true };
    case "FETCHED_PRODUCTS":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};
