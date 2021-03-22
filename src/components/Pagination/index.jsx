import React from 'react'
import {Button} from '../../components'

import './style.scss';

export default function Pagination({list, next, prev, first, last, getList, pageList, goPage}) {
    return (
        <div className="pagination">
            <div>
                <Button className="list" onClick={first}>first</Button>
                <Button className="list" onClick={prev}>prev</Button>
            </div>
            <div>
                {getList?.map((e) => <Button onClick={() => goPage(e)} className={pageList === e ? "listNumber" : "list" }>{e}</Button>)}
            </div>
            <div>
                <Button className="list" onClick={next}>next</Button>
                <Button className="list" onClick={last}>last</Button>
            </div>
        </div>
    )
}