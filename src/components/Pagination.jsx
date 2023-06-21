import { Pagination as PaginationCarbon } from "@carbon/react";

/**
 * Pagination
 * @param {Integer} pageNumber
 * @param {itemsCount} pageNumber
 *
 *  wiki https://react.carbondesignsystem.com/?path=/story/components-pagination--pagination
 */
const Pagination = ({
  pageNumber = 1,
  totalItems = 100,
  itemsPerPage,
  dispatch
}) => {
  return (
    <PaginationCarbon
      backwardText="Previous page"
      forwardText="Next page"
      itemsPerPageText="Items per page:"
      page={pageNumber}
      pageNumberText="Page Number"
      pageSize={itemsPerPage}
      onChange={({ page }) => {
        dispatch({
          type: "loading_start"
        });

        dispatch({
          type: "pageChanged",
          data: { page }
        });

        ///setTimeout(() => {
        dispatch({
          type: "loading_end"
        });
        //}, [500]);
      }}
      pageSizes={[itemsPerPage]}
      totalItems={totalItems}
    />
  );
};

export default Pagination;
