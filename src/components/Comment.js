import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Comment = ({comment}) => {
    return (
        <>
        <ListGroup.Item>
            {comment.comment}
            <footer style={{textAlign: "right"}}>
                {comment.user.first_name} {comment.user.last_name}
            </footer>
        </ListGroup.Item>
        </>
    )
}

export default Comment
