import React, { Component } from 'react'
import './index.css'

export default class Search extends Component {

    state = {
        searchValue: ''
    }

    searchBy = (e) => {
        const searchValue = e.target.value
        this.setState({ searchValue })
        this.props.onSearchElem(searchValue)
    }

    render () {
        return(
            <input className="form-control search-box" 
            onChange={this.searchBy} 
            placeholder='search' 
            value={this.state.searchValue} />
        )
    }
}