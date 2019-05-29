import { FETCH_TOPICS, LOGOUT } from '../constants/ActionTypes'


const initialState = {
    topics: {}
}

function topicsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOPICS:
            return action.payload
        case LOGOUT:
            return {}
        default:
            return state
    }
}

export default topicsReducer