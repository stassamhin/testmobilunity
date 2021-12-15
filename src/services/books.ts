import { post} from "./fetch";
import { Book } from "types/Book";
import { Pagination, DEFAULT_PAGINATION } from "types/Pagination";

interface IGetBooks {
    books: Book[],
    count: number
}
export const getBooks = (body: Pagination = DEFAULT_PAGINATION) => post<IGetBooks>("/books", {
    ...body,
    filters: body.filters ? [{type: "all", values: [body.filters]}] : []
})