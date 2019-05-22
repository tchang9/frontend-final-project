import { FETCH_EVENTS, EDIT_EVENT } from '../constants/ActionTypes'


const initialState = {}

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return action.payload
        case EDIT_EVENT:
            const event = action.payload
            return {...state,  [event.id]: event}
        default:
            return state
    }
}

export default eventsReducer