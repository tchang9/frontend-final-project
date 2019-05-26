import { FETCH_EVENT_USERS } from '../constants/ActionTypes'


const initialState = {}

function eventUsersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EVENT_USERS:
            return action.payload
        default:
            return state
    }
}

export default eventUsersReducer
