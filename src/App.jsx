import React from "react";
import { DataTableSkeleton } from "@carbon/react";
import DataTable from "./components/Datatable";
import Pagination from "./components/Pagination";
import useDatable from "./hooks/useDataTable";

/**
 *  Initial Application
 *
 * wiki:
 *  https://reactjs.org/docs/hooks-state.html
 * https://reactjs.org/docs/hooks-reference.html#usereducer
 */
const App = () => {
  const { state, dispatch, headers } = useDatable();
  return (
    <>
      {!state.loading ? (
        <DataTable headerData={headers} rowData={state.apiData} />
      ) : (
        <DataTableSkeleton headers={null} />
      )}

      <Pagination
        totalItems={state.totalItems}
        itemsPerPage={state.itemsPerPage}
        dispatch={dispatch}
      />
    </>
  );
};

export default App;
