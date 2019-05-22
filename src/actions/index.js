import { FETCH_EVENTS, SELECT_EVENT, FETCH_TOPICS, FETCH_COMMENTS, SELECT_TOPIC, LOGIN, ADD_COMMENT, FETCH_ACTIVITIES, EDIT_EVENT, ADD_EVENT } from "../constants/ActionTypes";
import { get, patch, post } from '../adapters'
import { withRouter } from 'react-router'
import React from 'react'

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
        get(`http://localhost:3000/events`)
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
        fetch(`http://localhost:3000/fetch-topics`, {
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
        fetch(`http://localhost:3000/fetch-comments`, {
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

export const login = (user) => {
    return {type: LOGIN, payload: user}
}

export const addComment = (comment) => {
    return {type: ADD_COMMENT, payload: comment}
}

export const fetchActivities = (eventId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/fetch-activities`, {
            method: 'POST',
            body: JSON.stringify({id: eventId}),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(activities => {
            const activitiesObj = {}
            activities.forEach(activity => {
                activitiesObj[activity.id] = activity
            })
            dispatch({type: FETCH_ACTIVITIES, payload: activitiesObj})
        })
    }
}

export const editEvent = (event) => {
    return (dispatch) => {
        patch(`http://localhost:3000/events/${event.id}`, event)
        .then(event => {
            dispatch({type: EDIT_EVENT, payload: event})
        })

    }
}

export const addEvent = (event) => {
    return (dispatch) => {
        post(`http://localhost:3000/events`, event)
        .then(event => {
            dispatch({type: ADD_EVENT, payload: event})
        })
    }
}