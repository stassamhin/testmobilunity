import React from 'react';
import {
    Table as MaterialTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@material-ui/core";
import {useBooksProvider} from "providers/BooksProvider";

function Table() {
    const { books } = useBooksProvider()

    return (
        <TableContainer component={Paper}>
            <MaterialTable aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Pages</TableCell>
                        <TableCell align="right">City</TableCell>
                        <TableCell align="right">Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((row) => (
                        <TableRow
                            key={row.id}
                        >
                            <TableCell component="th" scope="row">
                                {row.book_title}
                            </TableCell>
                            <TableCell align="right">{row.book_author[0]}</TableCell>
                            <TableCell align="right">{row.book_pages}</TableCell>
                            <TableCell align="right">{row.book_publication_city}</TableCell>
                            <TableCell align="right">{row.book_publication_year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </MaterialTable>
        </TableContainer>
    )
}

export default Table;
