import { FETCH_TOPICS } from '../constants/ActionTypes'


const initialState = {
    topics: {}
}

function topicsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOPICS:
            return action.payload
        default:
            return state
    }
}

export default topicsReducer