import { SELECT_TOPIC } from  '../constants/ActionTypes'

const initialState = null

const activeTopicIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_TOPIC:
            return action.payload
        default:
            return state
    }
}

export default activeTopicIdReducer
