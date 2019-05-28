import React from 'react'
import Comment from '../components/Comment'
import AddCommentForm from '../components/AddCommentForm'
import { connect } from 'react-redux'
import { fetchComments } from '../actions'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


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
        let comments = this.props.comments
        const topicId = parseInt(this.props.match.params.topic)
        return (
            <div className="topic">  
                {Object.keys(comments).length === 0 ? null :
                <>
                 <h2 className="topicName">{comments[Object.keys(comments)[0]].topic.label}</h2>
                <Card>
                    <ListGroup variant="flush">
                        {this.renderComments()}
                    </ListGroup>
                </Card>
                </>
                }
                <AddCommentForm topicId={topicId}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
    }
}

export default connect(mapStateToProps, { fetchComments } )(TopicContainer)