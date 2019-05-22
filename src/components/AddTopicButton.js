import React from 'react'
import { Link } from 'react-router-dom'

const AddTopicButton = () => {
    return (
        <Link to={`topics/add`}><button>Add New Topic</button></Link>
    )
}

export default AddTopicButton