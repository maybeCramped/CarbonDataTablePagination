import {
  DataTable as DataTableCarbon,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} from "@carbon/react";

/**
 * DataTable
 * @param {*} props
 * @param {*} props.rowData
 * @param {*} props.headerData
 * @returns JSX.element
 */
const DataTable = ({ rowData, headerData }) => (
  <>
    <DataTableCarbon rows={rowData} headers={headerData}>
      {({ rows, headers, getHeaderProps, getTableProps }) => (
        <TableContainer title="Carbon DataTable with The Cat Api">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTableCarbon>
  </>
);

export default DataTable;
