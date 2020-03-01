import React, { Component } from 'react'
import './index.css'

export default class EditList extends Component {
    render () {
        const { addOne } = this.props
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" 
                    type="button" 
                    onClick={() => addOne(document.getElementById('add-one').value)}>
                        Button</button>
                        
                </div>
                <input type="text" id="add-one"
                className="form-control" 
                placeholder="Enter name" />
            </div>
        )
    }
}