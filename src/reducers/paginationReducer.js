/**
 * Reducer for DataTabale
 * @param {*} state
 * @param {*} action
 */
const paginationReducer = (state, action) => {
  switch (action.type) {
    case "loading_start":
      return {
        ...state,
        loading: true
      };
    case "loading_end":
      return {
        ...state,
        loading: false
      };
    case "pageChanged":
      return {
        ...state,
        actualPage: action?.data?.page
      };
    case "setDataTable":
      return {
        ...state,
        totalItems: action?.data?.totalItems,
        apiData: action?.data?.apiData
      };
    default:
      return { ...state };
  }
};

export default paginationReducer;
