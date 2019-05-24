import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import {post} from '../adapters'


class AddCommentForm extends React.Component {

    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) => {
        const topicId = this.props.topicId
        const data = {...this.state, topicId}
        e.preventDefault()
        post('http://localhost:3000/comments', data)
        .then(comment => {
            this.props.addComment(comment)
            this.setState({
                comment: ''
            })
        })
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
            Comment:
            <input 
                onChange={this.handleChange}type="text" 
                name="comment" 
                value={this.state.comment}/>
            <button>Submit</button>
        </form> 
        )
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, {addComment})(AddCommentForm)