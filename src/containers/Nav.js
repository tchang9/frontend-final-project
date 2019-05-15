import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <p className="topic"><Link to='/profile/event1'>Topic</Link></p>
            <p className="schedule"><Link to='/profile/event1/schedule'>Schedule</Link></p>
            <p className="attendees">Attendees</p>
        </>
    )
}

export default Nav
