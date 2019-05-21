import { FETCH_COMMENTS, ADD_COMMENT } from '../constants/ActionTypes'


const initialState = {}

function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload
        case ADD_COMMENT:
            const newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}

export default commentsReducer