import React from 'react'
import Activity from './Activity'
import v4 from 'uuid'


const Day = ({date, activities}) => {

    const renderActivities = () => {
        return Object.keys(activities).map(id => {
            return <Activity key={ v4() } activity={activities[id]}/>
        })
    }
    return (
        <>
            <h1>{date}</h1>
            {renderActivities()}
        </>
    )
}

export default Day