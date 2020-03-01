import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    render () {
        const { left, done } = this.props
        return (
            <div className="header-box">
                <h1>Work List</h1>
                <h6>
                    <span className="badge badge-secondary">{left} - left</span>
                    <span className="badge badge-success">{done} - done</span>
                </h6>
            </div>
        )
    }
}