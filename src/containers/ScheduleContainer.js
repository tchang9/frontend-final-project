import React from 'react'
import Day from '../components/Day'
import { connect } from 'react-redux'
import { fetchActivities } from '../actions'
import v4 from 'uuid'
import AddActivityButton from '../components/AddActivityButton'
import { Card, CardGroup } from 'react-bootstrap'


class ScheduleContainer extends React.Component {

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

    render() {
        return (
            <>
                <p>Schedule</p>
                <AddActivityButton />
                <CardGroup>
                    {this.renderDays()}
                </CardGroup>
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
