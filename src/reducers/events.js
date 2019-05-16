import { FETCH_EVENTS } from '../constants/ActionTypes'


const initialState = {}

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EVENTS:
            return action.payload
        default:
            return state
    }
}

export default eventsReducer