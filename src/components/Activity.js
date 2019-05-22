import React from 'react'

const Activity = ({activity}) => {
    return (
        <>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>{activity.start_time} - {activity.end_time}</p>
        </>
    )
}

export default Activity
