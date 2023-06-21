import { useEffect, useMemo, useReducer } from "react";
import paginationReducer from "../reducers/paginationReducer";
import { searchImages } from "../services/dataRequest";

const initialReducerState = {
  totalItems: 100,
  itemsPerPage: 10,
  actualPage: 1,
  apiData: [],
  loading: false
};
const useDatable = () => {
  const [state, dispatch] = useReducer(paginationReducer, initialReducerState);

  const headers = useMemo(() => {
    if (state.apiData?.[0]) {
      const [, ...currentKeys] = Object.keys(state.apiData[0]);
      return currentKeys.map((k) => ({
        key: k,
        header: k
      }));
    }
    return [];
  }, [state.apiData]);

  useEffect(() => {
    (async () => {
      dispatch({
        type: "loading_start"
      });
      const request = await searchImages({
        page: state.actualPage,
        limit: state.itemsPerPage,
        order: "Desc"
      });
      const { data = [], headers } = request;
      console.log(headers);
      if (!headers) return;
      const { "pagination-count": contentLength } = headers;
      dispatch({
        type: "setDataTable",
        data: {
          totalItems: parseInt(contentLength, 10),
          apiData: data
        }
      });
      dispatch({
        type: "loading_end"
      });
    })();
  }, [state.actualPage, state.itemsPerPage]);

  return {
    state,
    headers,
    dispatch
  };
};

export default useDatable;
