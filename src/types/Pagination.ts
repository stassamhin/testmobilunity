export interface Pagination {
    page: number
    itemsPerPage: number
    filters: string
}

export const DEFAULT_PAGINATION = {
    page: 1,
    itemsPerPage: 10,
    filters: ''
}