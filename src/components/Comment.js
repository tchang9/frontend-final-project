import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Comment = ({comment}) => {
    console.log(comment)
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
