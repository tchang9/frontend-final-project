import { FETCH_EVENTS, EDIT_EVENT, ADD_EVENT } from '../constants/ActionTypes'


const initialState = {}

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return action.payload
        case EDIT_EVENT:
            return {...state, [action.payload.id]: action.payload}
        case ADD_EVENT:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state
    }
}

export default eventsReducer