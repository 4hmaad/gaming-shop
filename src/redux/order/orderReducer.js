const INITIAL_STATE = {
  details: null,
  loading: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHED_ORDER":
      return {
        ...state,
        details: action.payload,
        loading: false,
      };
    case "FETCHING_ORDER":
      return {
        ...state,
        loading: true,
      };
    case "SAVED_ORDER":
      return {
        ...state,
        details: action.payload,
        loading: false,
      };
    case "SAVING_ORDER":
      return {
        ...state,
        loading: true,
      };
    case "ORDER_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
