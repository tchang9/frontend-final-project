import React from 'react'
import Activity from './Activity'
import v4 from 'uuid'


const Day = (props) => {

    const renderActivities = () => {
        return Object.keys(props.activities).map(id => {
            return <Activity key={ v4() } activity={props.activities[id]}/>
        })
    }
    return (
        <>
            <h1>{props.date}</h1>
            {renderActivities()}
        </>
    )
}

export default Day