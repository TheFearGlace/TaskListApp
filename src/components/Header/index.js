import React from 'react'
import './index.css'

const Header = () => {
    return (
        <div className="header-box">
            <h1>Work List</h1>
            <h6>
                <span className="badge badge-secondary">1 - left</span>
                <span className="badge badge-success">3 - done</span>
            </h6>
        </div>
    )
}

export default Header