import React from 'react'
import Day from '../components/Day'
import { connect } from 'react-redux'
import { fetchActivities } from '../actions'
import v4 from 'uuid'
import AddActivityButton from '../components/AddActivityButton'
import CardGroup from 'react-bootstrap/CardGroup'
import AddActivityForm from '../components/AddActivityForm'


class ScheduleContainer extends React.Component {

    state = {
        addActivityModal: false
    }

    componentDidMount() {
        const topicId = parseInt(this.props.match.params.event)
        this.props.fetchActivities(topicId)
    }

    daysObject = () => {
        return Object.entries(this.props.activities).reduce((acc, [k, v]) => {
            const day = this.props.activities[k].date
            acc[day] = {...acc[day], [k]: v}
            return acc

            // const day = this.props.activities[k].date
            // const {[day]: dayActivities, ...newAcc} = acc
            // return {...newAcc, [day]: {...dayActivities, [k]: v}}
        }, {})
    }

    renderDays = () => {
        const daysObj = this.daysObject()
        const dayComponents =  Object.keys(daysObj).map(date => {
            return <Day key={ v4() } date={date} activities={daysObj[date]} /> 
        })
        return dayComponents.sort((a, b) => {
            return a.props.date.localeCompare(b.props.date)
        })
    }

    addActivity = () => {
        this.setState({
            addActivityModal: true
        })
    }

    render() {
        let addModalClose = () => this.setState({ addActivityModal: false });
        return (
            <>
                <AddActivityButton addactivity={this.addActivity}/>
                {this.state.addActivityModal ? 
                    <AddActivityForm
                        show={this.state.addActivityModal}
                        onHide={addModalClose}
                        eventid={parseInt(this.props.match.params.event)}
                    />
                    :
                    null
                    }
                <div className="dayCards">
                    {this.renderDays()}
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps, {fetchActivities})(ScheduleContainer)
