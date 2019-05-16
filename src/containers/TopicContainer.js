import React from 'react'
import Comment from '../components/Comment'
import AddCommentForm from '../components/AddCommentForm'
import { connect } from 'react-redux'
import { fetchComments } from '../actions'


// Shows ONE TOPIC for an event
// path='/profile/events/:event/topics/:topic'
class TopicContainer extends React.Component {

    componentDidMount() {
        const topicId = parseInt(this.props.match.params.topic)
        this.props.fetchComments(topicId)
    }

    renderComments = () => {
        return Object.keys(this.props.comments).map(id => {
            return <Comment key={id} comment={this.props.comments[id]}/> 
        })
    }

    
    render() {
        // const topic = this.props.topics[this.props.match.params.event]
        return (
            <>
                {/* <p>{topic.label}</p> */}
                {this.props.comments.comments ? null : this.renderComments()}
                <AddCommentForm />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics,
        comments: state.comments,
    }
}

export default connect(mapStateToProps, { fetchComments } )(TopicContainer)