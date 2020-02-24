import React from 'react'

const WorkListElements = ({ label, status }) => {
    const statusClass = status ? 'done' : null
    return <span className={statusClass}>{ label }</span>
}

export default WorkListElements