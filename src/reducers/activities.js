import { FETCH_ACTIVITIES, EDIT_ACTIVITY, ADD_ACTIVITY } from '../constants/ActionTypes'


const initialState = {}

function activitiesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return action.payload
        case EDIT_ACTIVITY:
            return {...state, [action.payload.id]: action.payload}
        case ADD_ACTIVITY:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state
    }
}

export default activitiesReducer
