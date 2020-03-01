import React, { Component } from 'react'
import './index.css'
export default class WorkListElements extends Component {

    render () {
        const { label, onDeleted, onStatusDone, status } = this.props
        const classNames = status ? 'done' : null
        const checkedElement = status ? 'checked' : null
        return (
            <span className={classNames}>
                <input className="pull-left status-checkbox" 
                    onChange={ onStatusDone } type="checkbox" defaultChecked={checkedElement} />

                { label }
                
                <button type="button" 
                className="btn btn-outline-danger btn-sm pull-right" 
                onClick={onDeleted}
>
                    <i className="fa fa-trash-o"></i>
                </button>

                {/* <button type="button" 
                className="btn btn-outline-success btn-sm pull-right">
                    <i className="fa fa-exclamation"></i>
                </button> */}
            </span>
        )
    }
}