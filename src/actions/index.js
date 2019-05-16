import { FETCH_EVENTS, SELECT_EVENT, FETCH_TOPICS, FETCH_COMMENTS, SELECT_TOPIC } from "../constants/ActionTypes";

export function getTopics(topics) {
    return {
        type: "GET_TOPICS",
        payload: topics
    }
}

export function getComments(comments) {
    return {
        type: "GET_COMMENTS",
        payload: comments
    }
}

export const fetchEvents = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/events`)
        .then(res => res.json())
        .then(events => {
            dispatch({type: FETCH_EVENTS, payload: events})
        })
    }
}

export const selectEvent = (eventId) => {
    return {type: SELECT_EVENT, payload: eventId}
}

export const fetchTopics = (eventId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/topics`, {
            method: 'POST',
            body: JSON.stringify({id: eventId}),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(topics => {
            dispatch({type: FETCH_TOPICS, payload: topics})
        })
    }
}

export const fetchComments = (topicId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/comments`, {
            method: 'POST',
            body: JSON.stringify({id: topicId}),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(comments => {
            const objComments = {}
            comments.forEach(comment => {
                objComments[comment.id] = comment
            })
            dispatch({type: FETCH_COMMENTS, payload: objComments})
        })
    }
}

export const selectTopic = (topicId) => {
    return {type: SELECT_TOPIC, payload: topicId}
}