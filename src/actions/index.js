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

export function setEvent(event) {
    return {
        type: "SET_EVENT", 
        payload: event
    }
}

export function getComments(comments) {
    return {
        type: "GET_COMMENTS",
        payload: comments
    }
}
