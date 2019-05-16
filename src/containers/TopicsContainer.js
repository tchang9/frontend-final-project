import React from 'react'
import AddTopicButton from '../components/AddTopicButton'
// import AddTopicForm from '../components/AddTopicForm'
import { connect } from 'react-redux'
import { fetchTopics, fetchComments, selectTopic } from '../actions'
import { Link } from 'react-router-dom'

// Shows all the Topics for an event
class TopicsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTopics(this.props.match.params.event)
    }

    handleClick = (topicId) => {
        this.props.fetchComments(topicId)
        this.props.selectTopic(topicId)
    }

    renderTopics = () => {
        return Object.keys(this.props.topics).map(id => {
            const topic = this.props.topics[id]
            return <Link key={id} to={`topics/${id}`}> <p onClick={() => this.handleClick(id)} className="topicName">{topic.label}</p></Link>
        })
    }

    render() {
        return (
            <>
                {this.props.topics ? this.renderTopics() : "loading"}
                <AddTopicButton /> 
            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        topics: state.topics,
    }
}

export default connect(mapStateToProps, { fetchTopics, fetchComments, selectTopic })(TopicsContainer)
