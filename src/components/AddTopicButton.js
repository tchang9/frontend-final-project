import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const AddTopicButton = (props) => {
    return (
        <Link to={`/profile/events/${props.currentEvent}/topics/add`}><button>Add New Topic</button></Link>
    )
}

function mapStateToProps(state) {
    return {
        currentEvent: state.currentEvent
    }
}

export default connect(mapStateToProps)(AddTopicButton)