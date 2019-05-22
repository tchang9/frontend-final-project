import React from 'react'
import Activity from './Activity'
import v4 from 'uuid'


const Day = ({date, activities}) => {

    const renderActivities = () => {

        const activityComponents = Object.keys(activities).map(id => {
            return <Activity key={ v4() } activity={activities[id]}/>
        })

        return activityComponents.sort((a, b) => {
            return a.props.activity.start_time.localeCompare(b.props.activity.start_time)
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
