import React, {createContext, useContext, useEffect, useState} from 'react';
import { Book } from 'types/Book';
import {Pagination, DEFAULT_PAGINATION} from "types/Pagination";
import {useQueryString} from "hooks/useQueryString";
import { getBooks } from "services/books"

interface IBooksProvider extends Pagination {
    books: Book[],
    total: number,
    setFilter: (v: string) => void;
    setPage: (v: number) => void;
    setItemsPerPage: (v: number) => void;
};

export const BooksContext = createContext<IBooksProvider>({
    ...DEFAULT_PAGINATION,
    books: [],
    total: 0,
    setFilter: () => {},
    setPage: () => {},
    setItemsPerPage: () => {},
});

const convertPaginationToString = ({ filters, page, itemsPerPage }: Pagination) => ({
    page: String(page),
    itemsPerPage: String(itemsPerPage),
    filters
});

const convertPaginationFromString = ({ filters, page, itemsPerPage }: Record<keyof Pagination, string>): Pagination => ({
    page: Number(page),
    itemsPerPage: Number(itemsPerPage),
    filters
});

export const BooksProvider: React.FC = ({ children }) => {
    const [ books, setBooks] = useState<Book[]>([])
    const [ total, setTotal] = useState(0)

    const [paginationData, setPaginationData] = useQueryString(convertPaginationToString(DEFAULT_PAGINATION))

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBooks(convertPaginationFromString(paginationData))
            setBooks(response.books)
            setTotal(response.count)
        }

        fetchData()
    }, [paginationData, setTotal, setBooks])

    const setFilter = (search: string) => {
        setPaginationData({
            ...paginationData,
            filters: search
        })
    }

    const setPage = (page: number) => {
        setPaginationData({
            ...paginationData,
            page: String(page)
        })
    }

    const setItemsPerPage = (itemsPerPage: number) => {
        setPaginationData({
            ...paginationData,
            itemsPerPage: String(itemsPerPage)
        })
    }

    return (
    <BooksContext.Provider value={{
        books,
        total,
        setFilter,
        setPage,
        setItemsPerPage,
        ...convertPaginationFromString(paginationData)
    }}>
        {children}
    </BooksContext.Provider>
);
};

export const useBooksProvider = () => useContext<IBooksProvider>(BooksContext);
