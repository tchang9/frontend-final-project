import React from 'react'

const Comment = ({comment}) => {
    return (
        <>
        <p>{comment.user.first_name}: {comment.comment}</p>
        </>
    )
}

export default Comment
