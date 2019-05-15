import React from 'react'
import AddTopicButton from '../components/AddTopicButton'
import AddTopicForm from '../components/AddTopicForm'
import { connect } from 'react-redux'
import { getTopics } from '../actions'

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

    renderTopics = () => {
        return this.props.topics.map(topic => {
            return <p key={topic.id} className="topicName">{topic.label}</p>
        })
    }

    render() {
        return (
            <>
                {this.renderTopics()}
                <AddTopicButton />
                <AddTopicForm />
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTopics: (topics) => {
            dispatch(getTopics(topics))
        }
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer)
