import React from 'react'
import Day from '../components/Day'
import { connect } from 'react-redux'
import { fetchActivities } from '../actions'
import v4 from 'uuid'


class ScheduleContainer extends React.Component {

    componentDidMount() {
        const topicId = parseInt(this.props.match.params.event)
        this.props.fetchActivities(topicId)
    }

    daysObject = () => {
        const daysObj = {}
        Object.keys(this.props.activities).forEach(id => {
            const day = this.props.activities[id].date
            const activity = {[id]: this.props.activities[id]}
            if (daysObj[day]) {
                return daysObj[day] = {...daysObj[day], [id]: this.props.activities[id]}
            } else {
                return daysObj[day] = activity
            }
        })
        return daysObj
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
                {this.renderDays()}
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
