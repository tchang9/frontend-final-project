import { SELECT_EVENT } from  '../constants/ActionTypes'

const initialState = null

const activeEventIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_EVENT:
            return action.payload
        default:
            return state
    }
}

export default activeEventIdReducer