/**
 * The initial state of the loaded order.
 * @property String details -  The details of the fetched order.
 * @property Boolean isLoading - it's true when there something is loading related to the order's state.
 * @property Boolean hasError - true when order's state has error otherwise false.
 * @property String error - The error message, is null when there is no error.
 */

const INITIAL_STATE = {
  details: null,
  isLoading: false,
  hasError: false,
  error: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "FETCH_ORDER":
      return {
        details: payload,
        isLoading: false,
        hasError: false,
        error: null,
      };
    case "SAVE_ORDER":
      return {
        ...state,
        details: payload,
        isLoading: false,
        hasError: false,
        error: null,
      };
    case "LOADING_ORDER":
      return {
        ...state,
        isLoading: true,
      };
    case "ERROR_ORDER":
      return {
        ...state,
        hasError: true,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
