import React from 'react';
import { TablePagination } from "@material-ui/core";
import {useBooksProvider} from "providers/BooksProvider";

function Pagination() {
    const { total, page, setPage, itemsPerPage, setItemsPerPage } = useBooksProvider()

    return (
        <TablePagination
            rowsPerPageOptions={[10, 15, 25]}
            component="div"
            count={total}
            rowsPerPage={itemsPerPage}
            page={page - 1}
            onPageChange={(e, page) => setPage(page + 1)}
            onRowsPerPageChange={(e) => setItemsPerPage(Number(e.target.value))}
        />
    );
}

export default Pagination;
