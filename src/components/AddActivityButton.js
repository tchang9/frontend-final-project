import React from 'react'
import { Link } from 'react-router-dom'

const AddActivityButton = () => {
    return (
        <Link to={`schedule/add`}><button>Add New Activity</button></Link>
    )
}

export default AddActivityButton