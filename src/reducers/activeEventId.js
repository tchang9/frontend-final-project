import { SELECT_EVENT, LOGOUT } from  '../constants/ActionTypes'

const initialState = null

const activeEventIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_EVENT:
            return action.payload
        case LOGOUT:
            return null
        default:
            return state
    }
}

export default activeEventIdReducer
