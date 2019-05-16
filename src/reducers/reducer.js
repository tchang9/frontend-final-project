const initialState = {
    events: [],
    topics: [],
    comments: [],
    currentEvent: null
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "GET_EVENTS":
            return {
                ...state, events: action.payload
            }
        case "GET_TOPICS":
            return {
                ...state, topics: action.payload
            }
        case "SET_EVENT":
            return {
                ...state, currentEvent: action.payload
            }
        case "GET_COMMENTS":
            return {
                ...state, comments: action.payload
            }
        default: 
            return state
    }
}

export default reducer