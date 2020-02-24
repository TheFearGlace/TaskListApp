import React from 'react'

import WorkListElements from './WorkListElements'
import './index.css'

const WorkList = ({ dataList }) => {

    const elements = dataList.map((item) => {
        //если свойства совпадают с обьектом то можно использовать spread
        const {id, ...itemProps} = item
        return  (
            <li key={id} className="list-group-item">
                <input className="pull-left status-checkbox" type="checkbox" checked={ item.status } />
                <WorkListElements {...itemProps} />
                <button type="button" className="btn btn-outline-danger btn-sm pull-right">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button type="button" className="btn btn-outline-success btn-sm pull-right">
                    <i className="fa fa-exclamation"></i>
                </button>
            </li>
        )
    })

    return (
        <ul className="list-group work-list-box">
            { elements }
        </ul>
    )
}

export default WorkList