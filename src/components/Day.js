import React from 'react'
import MyVerticallyCenteredModal from './Activity'
import v4 from 'uuid'
import Card from 'react-bootstrap/Card'
import EditActivityModal from '../components/EditActivityModal'
var moment = require('moment')


class Day extends React.Component {

    // const renderActivities = () => {

    //     const activityComponents = Object.keys(activities).map(id => {
    //         return <Activity key={ v4() } activity={activities[id]}/>
    //     })

    //     return activityComponents.sort((a, b) => {
    //         return a.props.activity.start_time.localeCompare(b.props.activity.start_time)
    //     })

    // }

    state = {
        modalShow: false,
        activity: {},
        editModalShow: false
    }

    renderActivities = () => {

        const activityComponents = Object.keys(this.props.activities).map(id => {
            return (
                <Card.Text onClick={() => this.setState({ modalShow: true, activity: this.props.activities[id]})} className="activity" key={ v4() }>
                    {this.props.activities[id].start_time}  {this.props.activities[id].name}
                </Card.Text>
            )
        })

        return activityComponents.sort((a, b) => {
            return a.props.children[0].localeCompare(b.props.children[0])
        })

    }

    render () {
        let modalClose = () => this.setState({ modalShow: false });
        let editActivity = () => this.setState({editModalShow: true, modalShow: false })
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <>
                <Card>
                    <Card.Body>
                    <Card.Title>{moment(this.props.date).format('MMMM Do YYYY')}</Card.Title>
                    {this.renderActivities()}
                    {this.state.modalShow ? 
                    <MyVerticallyCenteredModal
                        show={this.state.modalShow}
                        onHide={modalClose}
                        editActivity={editActivity}
                        activity={this.state.activity}
                    />
                    :
                    null
                    }
                    {this.state.editModalShow ? 
                    <EditActivityModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        activity={this.state.activity}
                    />
                    :
                    null
                    }
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Day
