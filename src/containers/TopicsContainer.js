import React from 'react'
import AddTopicBUtton from '../components/AddTopicButton'
import AddTopicForm from '../components/AddTopicForm';

// Shows all the Topics for an event
const TopicsContainer = () => {
    return (
        <>
            <p className="topicName">Gift Ideas (add last updated)</p>
            <p className="topicName">Dinner Plans</p>
            <AddTopicBUtton />
            <AddTopicForm />
        </>
    )
}

export default TopicsContainer
