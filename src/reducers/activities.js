import { FETCH_ACTIVITIES } from '../constants/ActionTypes'


const initialState = {}

function activitiesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return action.payload
        default:
            return state
    }
}

export default activitiesReducer