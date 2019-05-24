import React from 'react'
import {connect} from 'react-redux'
import {fetchEventUsers} from '../actions'

class ParticipantsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEventUsers({eventId: parseInt(this.props.match.params.event)})
    }

    renderUsers = () => {
        const eventUsers = this.props.eventUsers
        return Object.keys(eventUsers).map(id => {
            return <p key={id}>{eventUsers[id].first_name} {eventUsers[id].last_name}</p>
        })
    }

    render() {
        return (
            <>
            {this.renderUsers()}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeEventId: state.activeEventId,
        eventUsers: state.eventUsers
    }
}

export default connect(mapStateToProps, { fetchEventUsers })(ParticipantsContainer)
