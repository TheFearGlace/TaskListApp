import React, { Component } from 'react'

import WorkListElements from './WorkListElements'
import './index.css'

export default class WorkList extends Component {

    render () {
        const { dataList, onDeleted, onStatusDone } = this.props
        const elements = dataList.map((item) => {
            //если свойства совпадают с обьектом то можно использовать spread
            const {id, ...itemProps} = item
            return  (
                <li key={id} className="list-group-item">
                    <WorkListElements {...itemProps}
                    onStatusDone={() => onStatusDone(id)}
                    onDeleted={() => onDeleted(id)} />
                </li>
            )
        })
    
        return (
            <ul className="list-group work-list-box">
                { elements }
            </ul>
        )
    }
}