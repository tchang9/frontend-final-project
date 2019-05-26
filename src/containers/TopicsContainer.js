import React from 'react'
import AddTopicButton from '../components/AddTopicButton'
// import AddTopicForm from '../components/AddTopicForm'
import { connect } from 'react-redux'
import { fetchTopics, fetchComments, selectTopic } from '../actions'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import v4 from 'uuid'
import TopicContainer from './TopicContainer'


// Shows all the Topics for an event
class TopicsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTopics(this.props.activeEventId)
    }

    renderTopics = () => {
        return Object.keys(this.props.topics).map(id => {
            const topic = this.props.topics[id]
            return (
                <Link key={v4()} to={`/profile/events/${topic.event_id}/topics/${topic.id}`} style={{ textDecoration: 'none' }}>
                    <Card  bg="light" style={{ width: '26rem' }}>
                        <Card.Body>
                        <Card.Title>{topic.label}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="topicsContainer">
                <div className="topics">
                    {this.props.topics ? this.renderTopics() : "loading"}
                </div>
                <div className="addTopicButton">
                <AddTopicButton /> 
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics,
        activeEventId: state.activeEventId
    }
}

export default connect(mapStateToProps, { fetchTopics, selectTopic })(TopicsContainer)
