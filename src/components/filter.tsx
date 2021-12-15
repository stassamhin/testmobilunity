import React, {useEffect, useRef, useState} from 'react';
import { TextField } from "@material-ui/core";
import debounce from 'lodash.debounce'
import {useBooksProvider} from "providers/BooksProvider";

function Filter() {
    const { setFilter, filters } = useBooksProvider()
    const [search, setSearch] = useState(filters)

    const debounced = useRef(debounce((newValue: string) => setFilter(newValue), 1000))

    useEffect(() => debounced.current(search), [search])
    useEffect(() => setSearch(filters), [setSearch, filters])

    return (
        <TextField
            style={{ marginBottom: 20, marginLeft: "auto", width: 400 }}
            variant="outlined"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
}

export default Filter;
