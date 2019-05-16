import React from 'react'
import AddTopicButton from '../components/AddTopicButton'
import AddTopicForm from '../components/AddTopicForm'
import { connect } from 'react-redux'
import { getTopics, getComments } from '../actions'
import { Link } from 'react-router-dom'

// Shows all the Topics for an event
class TopicsContainer extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:3000/topics`, {
            method: 'POST',
            body: JSON.stringify({id: this.props.match.params.id}),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(this.props.getTopics)
    }

    handleClick = (topicId) => {
        fetch(`http://localhost:3000/comments`, {
            method: 'POST',
            body: JSON.stringify({id: topicId}),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(this.props.getComments)
    }

    renderTopics = () => {
        return this.props.topics.map(topic => {
            return <Link key={topic.id} to={`/profile/events/${this.props.currentEvent}/topics/${topic.id}`}> <p onClick={() => this.handleClick(topic.id)} className="topicName">{topic.label}</p></Link>
        })
    }

    render() {
        return (
            <>
                {this.renderTopics()}
                <AddTopicButton />
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTopics: (topics) => {
            dispatch(getTopics(topics))
        },
        getComments: (comments) => {
            dispatch(getComments(comments))
        }
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics,
        currentEvent: state.currentEvent
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer)
