import React from 'react'
import AddTopicForm from '../components/AddTopicForm'
import { connect } from 'react-redux'
import { fetchTopics, selectTopic } from '../actions'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import v4 from 'uuid'

// Shows all the Topics for an event
class TopicsContainer extends React.Component {

    state = {
        addTopicModal: false
    }

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
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            )
        })
    }

    addTopicClick = () => {
        this.setState({
            addTopicModal: true
        })
    }

    render() {
        let addTopicModalClose = () => this.setState({ addTopicModal: false });
        return (
            <div className="topicsContainer">
                <div className="topics">
                    {this.props.topics ? this.renderTopics() : "loading"}
                </div>
                <div className="addTopicButton">
                    <button onClick={this.addTopicClick} className="item">
                        Add New Topic
                    </button>
                </div>
                {this.state.addTopicModal ? 
                    <AddTopicForm 
                        show={this.state.addTopicModal}
                        onHide={addTopicModalClose}
                        eventId = {this.props.activeEventId}
                />
                :
                null
                }
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
