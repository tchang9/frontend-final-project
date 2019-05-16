import React from 'react'
import Comment from '../components/Comment'
import AddCommentForm from '../components/AddCommentForm'
import { connect } from 'react-redux'

// Shows ONE TOPIC for an event
const TopicContainer = (props) => {

    const renderComments = () => {
        return props.comments.map(comment => {
            return <Comment key={comment.id} comment={comment}/> 
        })
    }
    
    const topic = props.topics.find(topic => topic.id === parseInt(props.match.params.id))

    return (
        <>
            <p>{topic.label}</p>
            {renderComments()}
            <AddCommentForm />
        </>
    )
}

function mapStateToProps(state) {
    console.log("state", state)
    return {
        comments: state.comments,
        topics: state.topics
    }
}

export default connect(mapStateToProps)(TopicContainer)