import React from 'react'
import Comment from '../components/Comment'
import AddCommentForm from '../components/AddCommentForm'

// Shows ONE TOPIC for an event
const TopicContainer = () => {
    return (
        <>
            <p>Gift Ideas</p>
            <Comment />
            <Comment />
            <AddCommentForm />
        </>
    )
}

export default TopicContainer