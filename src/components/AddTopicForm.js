import React from 'react'
import {post} from '../adapters'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router'


class AddTopicForm extends React.Component {

    state = {
        form: {
            topicName: "",
            comment: ""
        },
        errors: {
            topicName: false,
            comment: false
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {...this.state.form, [e.target.name]: e.target.value}
        })
    }

    validator = () => {
        let valid = true
        Object.entries(this.state.form).forEach(
            ([key, value]) => {
                if (!value) {
                    this.setState( prevState => {
                        return {
                            errors: {...prevState.errors, [key]: true}
                        }
                    })
                    valid = false
                } else {
                    this.setState( prevState => {
                        return {
                            errors: {...prevState.errors, [key]: false}
                        }
                    })
                }
            }
        )
        return valid
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.validator()) {
            const data = {...this.state.form, id: this.props.eventId}
            post('http://localhost:3000/topics', data)
            .then(res => {
                const topicId = res.id
                this.props.history.push(`/profile/events/${this.props.eventId}/topics/${topicId}`)
            })
        }
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
                        {this.state.errors.topicName
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Topic Name</label>
                            <input 
                                name="topicName" 
                                type="text" 
                                value={this.state.form.topicName} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter an Topic Name!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Topic Name</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                name="topicName" 
                                type="text" 
                                placeholder="Enter Topic Name"
                                value={this.state.form.topicName} />
                        </Form.Group>
                        }

                        {this.state.errors.comment
                        ?
                        <div className="form-group has-danger">
                            <label className="form-control-label">Comment</label>
                            <input 
                                name="comment" 
                                type="text" 
                                value={this.state.form.comment} 
                                className="form-control is-invalid" 
                                onChange={this.handleChange} />
                            <div className="invalid-feedback">Please enter a comment!</div>
                        </div>
                        :
                        <Form.Group >
                            <Form.Label >Comment</Form.Label>
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name="comment" 
                                value={this.state.form.comment}
                                placeholder="Enter Comment"
                            />
                        </Form.Group>
                        }
                        <button style={{display: 'none'}}>For Enter to Submit</button>

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
