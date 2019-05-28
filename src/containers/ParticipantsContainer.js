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
            return (
                <tr key={id} className="table-light">
                    <th>{eventUsers[id].first_name} {eventUsers[id].last_name}</th>                
                    <th>{eventUsers[id].email}</th>
                </tr>
            )

        })
    }
    

    generateMagicLink = () => {
        const eventId = this.props.activeEventId
        const encodedEventId = btoa(eventId)
        return `http://localhost:3001/join-event/${encodedEventId}`
    }

    handleClick = () => {
        const el = document.createElement('textarea');
        el.value = this.generateMagicLink();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        return (
            <>

            <button onClick={this.handleClick} type="button" className="btn btn-primary btn-sm inviteButton">Invite Others!</button>

            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                </table> 
            </div>

            {/* <p>Invite Others!</p>
            {this.generateMagicLink()} */}
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
