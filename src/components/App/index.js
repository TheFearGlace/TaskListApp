import React, { Component } from 'react'

import './index.css'
import Header from '../Header'
import Search from '../Search'
import WorkList from '../WorkList'
import StatusFilter from '../StatusFilter'
import EditList from '../EditList'

export default class App extends Component {

    state = {
        data: [
            {id: 1, label: 'todo 1', status: false},
            {id: 2, label: 'todo 2', status: false},
            {id: 3, label: 'todo 3', status: false}
        ],
        searchValue: ''
    }

    deleteELement = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((el) => el.id === id)
            const newResult = [
                ...data.slice(0,index), 
                ...data.slice(index+1)
            ]
            return {
                data: newResult
            }
        })
    }

    addElement = (text) => {
        this.setState(({ data }) => {
            const newRow = {
                id: data.length+1,
                label:text,
                status:false,
            }
            const newArr = [...data, newRow]
            return {
                data: newArr
            }
        })
    }

    onStatusDone = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((el) => el.id === id)

            const oldElement = data[index]
            const newRow = { ...oldElement, status:!oldElement.status}
            const newResult = [
                ...data.slice(0,index),
                newRow, 
                ...data.slice(index+1)
            ]
            return {
                data: newResult
            }
        })
    }


    searchElement = (elem, text) => {
        if(text.length === 0) {
            return elem
        }
        return elem.filter((item) => {
            return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
    }

    onSearchElem = (searchValue) => {
        this.setState({ searchValue })
    }

    render () {
        const { data, searchValue } = this.state
        const done = data.filter((el) => el.status).length
        const left = data.length - done
        const foundElements = this.searchElement(data, searchValue)
        return (
            <div>
                <Header left={left} done={done} />
                <Search onSearchElem={this.onSearchElem} />
                <StatusFilter />
                <WorkList dataList={foundElements}
                onDeleted={this.deleteELement}
                onStatusDone={this.onStatusDone} />
                <EditList addOne={this.addElement} />
            </div>
        )
    }
}