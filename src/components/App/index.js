import React from 'react'

import './index.css'
import Header from '../Header'
import Search from '../Search'
import WorkList from '..//WorkList'
import StatusFilter from '..//StatusFilter'

const App = () => {

    const data = [
        {id: 1, label: 'todo 1', status: false},
        {id: 2, label: 'todo 2', status: true},
        {id: 3, label: 'todo 3', status: false}
    ]

    return (
    <div>
        <Header />
        <Search />
        <StatusFilter />
        <WorkList dataList={data} />
    </div>
    )
}

export default App