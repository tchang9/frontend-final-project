import React from 'react'
import {Button} from 'react-bootstrap'
import {post} from '../adapters'

const JoinEvent = (props) => {
    const handleClick = () => {
        post(`http://localhost:3000/join-event/${props.match.params.eventId}`)
        .then(response => {
            if (response.message) {
                props.history.push(`/profile/events/`)
            } else {
                props.history.push(`/signup?redirect=join-event/${response.id}`)
            }
        })
    }

    return (
        <>
        <p>Join Event</p>
        <Button onClick={handleClick} variant="secondary">Join Event</Button>
        </>
    )
}

export default JoinEvent
