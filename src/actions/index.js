import { FETCH_EVENTS, SELECT_EVENT } from "../constants/ActionTypes";

export function getEvents(events) {
    return {
        type: "GET_EVENTS",
        payload: events
    }
}

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
    // console.log("hello")
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
