import React from 'react'

const Activity = (props) => {
    return (
        <>
            <h3>{props.activity.name}</h3>
            <p>{props.activity.description}</p>
            <p>{props.activity.start_time} - {props.activity.end_time}</p>
        </>
    )
}

export default Activity