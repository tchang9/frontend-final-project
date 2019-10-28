import { FETCH_EVENTS, SELECT_EVENT, FETCH_TOPICS, FETCH_COMMENTS, SELECT_TOPIC, LOGIN, ADD_COMMENT, FETCH_ACTIVITIES, EDIT_EVENT, ADD_EVENT, LOGOUT, EDIT_ACTIVITY, ADD_ACTIVITY, FETCH_EVENT_USERS, DELETE_ACTIVITY, DELETE_EVENT } from "../constants/ActionTypes";
import { get, patch, post, destroy } from '../adapters'

const server = "https://eventii.herokuapp.com/"
// const server = "http://localhost:3000"


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
        get(`${server}/events`)
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
        fetch(`${server}/fetch-topics`, {
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
        fetch(`${server}/fetch-comments`, {
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

export const logout = () => {
    return {type: LOGOUT}
}

export const addComment = (comment) => {
    return {type: ADD_COMMENT, payload: comment}
}

export const fetchActivities = (eventId) => {
    return (dispatch) => {
        fetch(`${server}/fetch-activities`, {
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
        patch(`${server}/events/${event.id}`, event)
        .then(event => {
            dispatch({type: EDIT_EVENT, payload: event})
        })

    }
}

export const addEvent = (event) => {
    return (dispatch) => {
        post(`${server}/events`, event)
        .then(event => {
            dispatch({type: ADD_EVENT, payload: event})
        })
    }
}

export const editActivity = (activity) => {
    return {type: EDIT_ACTIVITY, payload: activity}
}

export const addactivity = (activity) => {
    return {type: ADD_ACTIVITY, payload: activity}
}

export const fetchEventUsers = (eventId) => {
    return (dispatch) => {
        post(`${server}/fetch-event-users`, eventId)
        .then(users => {
            dispatch({type: FETCH_EVENT_USERS, payload: users})
        })
    }
}

export const deleteActivity = (activityId) => {
    return (dispatch) => {
        destroy(`${server}/activities/${activityId}`)
        .then(activityId => {
            dispatch({type: DELETE_ACTIVITY, payload: activityId})
        })
    }
}

export const deleteEvent = (eventId) => {
    return (dispatch) => {
        destroy(`${server}/events/${eventId}`)
        .then(eventId => {
            dispatch({type: DELETE_EVENT, payload: eventId})
        })
    }
}