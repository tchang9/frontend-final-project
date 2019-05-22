import React from 'react'
import { Link } from 'react-router-dom'

const Activity = ({activity}) => {

    const handleClick = () => {
        return <Link to={`/profile/events/${activity.event_id}/schedule/activities/${activity.id}`} />
    }

    return (
        <>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>{activity.start_time} - {activity.end_time}</p>
            <Link to={`/profile/events/${activity.event_id}/schedule/activities/edit/${activity.id}`}>
                <button onClick={handleClick}>Edit Activity</button>
            </Link>
        </>
    )
}

export default Activity
