import { FETCH_COMMENTS } from '../constants/ActionTypes'


const initialState = {}

function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload
        default:
            return state
    }
}

export default commentsReducer