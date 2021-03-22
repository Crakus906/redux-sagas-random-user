import { useEffect } from 'react';
import { useState } from "react"

export default function usePagination(PaginationList, filterContacts) {
    const [list, setList] = useState(PaginationList)
    const [page, setPage] = useState(1)
    const getList = list.slice(0, 9)
    const next = () => {
        if(page <= Math.floor(9/2)) {
            if(list[4] <=  Math.floor(9/2))setList(list?.map(i => i + 1))
            setPage(page + 1)
        } else {
            if(list[list.length - 1] < PaginationList.length)setList(list?.map(i => i + 1))
            if(page <= PaginationList.length)setPage(page + 1)
        }
       
    }
    const prev = () => {
        if(page > 1) {
            setList(list.map(i => i - 1))
            setPage(page - 1)
        }
    }
    const first = () => {
        setList(PaginationList.slice(0, 9))
        setPage(1)
    }
    const last = () => {
        setList(PaginationList.slice(PaginationList.length - 9))
        setPage(PaginationList.length)
    }
    const goPage = (e) => {
        setPage(e)
        // setList(list, (_,i) => i + 1)
        // setList(list.map(i => i + 1))
        // debugger
    }
    useEffect(() => {
        setList(PaginationList);
        // setPage(page)
    }, PaginationList)
    console.log('page', page);
    console.log('list', list);
    console.log('pagination',PaginationList);
    
    return {
        list,
        page,
        next,
        prev,
        first,
        last,
        getList,
        goPage,
    }
}