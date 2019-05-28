import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import {post} from '../adapters'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddCommentForm extends React.Component {

    state = {
        comment: '',
        errors: false
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.comment) {
            const topicId = this.props.topicId
            const data = {...this.state, topicId}

            post('http://localhost:3000/comments', data)
            .then(comment => {
                this.props.addComment(comment)
                this.setState({
                    comment: '',
                    errors: false
                })
                debugger
                window.scrollTo(0,document.querySelector('.bodyContainer').scrollHeight)
            })
        } else {
            this.setState({
                errors: true
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <Form className="addCommentForm" onSubmit={this.handleSubmit}>
                {this.state.errors ? 

                    <div className="form-group has-danger">
                        <input 
                            type="text" 
                            value={this.state.comment} 
                            className="form-control is-invalid commentInput" 
                            onChange={this.handleChange}
                            placeholder="Add a comment" 
                            name="comment" 
                        />
                        <div className="invalid-feedback">Please enter a comment!</div>
                    </div>
                :
                // <Form.Group as={Row}>
                // <Col>
                //     <Form.Control 
                //         type="text"
                //         className="commentInput"
                //         onChange={this.handleChange}
                //         name="comment" 
                //         value={this.state.comment}
                //         placeholder="Add a comment"
                //     />
                // </Col>
                // </Form.Group>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control commentInput" 
                            placeholder="Add a comment" 
                            onChange={this.handleChange}
                            name="comment" 
                            value={this.state.comment}
                        />
                    </div>
                }
                <div>
                    <Button onClick={this.handleSubmit} variant="outline-dark">Send</Button>
                </div>
            </Form> 
        )
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, {addComment})(AddCommentForm)