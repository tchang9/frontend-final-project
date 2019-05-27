import React from 'react'
import {post} from '../adapters'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router'


class AddTopicForm extends React.Component {

    state = {
        topicName: "",
        comment: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {...this.state, id: this.props.eventId}
        post('http://localhost:3000/topics', data)
        .then(res => {
            const topicId = res.id
            this.props.history.push(`/profile/events/${this.props.eventId}/topics/${topicId}`)
        })
    }

    render() {
        let {show, onHide} = this.props
        return (
            <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add Topic
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group >
                            <Form.Label >Topic Name</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                name="topicName" 
                                type="text" 
                                placeholder="Enter Topic Name"
                                value={this.state.topicName} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label >Comment</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name="comment" 
                                value={this.state.comment}
                                placeholder="Enter Comment"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default withRouter(AddTopicForm)
