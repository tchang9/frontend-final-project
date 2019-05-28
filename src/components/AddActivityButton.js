import React from 'react'

const AddActivityButton = (props) => {
    return (
        <button className='btn btn-outline-primary btn-sm addActivityButton' onClick={props.addactivity}>Add New Activity</button>
    )
}

export default AddActivityButton