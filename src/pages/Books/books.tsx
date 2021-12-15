import React from 'react';
import Table from "components/table";
import Filter from 'components/filter';
import Pagination from "components/pagination";
import {BooksProvider} from "providers/BooksProvider";
import './books.css'


function Books() {

    return (
        <div className="books">
            <BooksProvider>
                <Filter />
                <Table />
                <Pagination />
            </BooksProvider>
        </div>
    );
}

export default Books;
