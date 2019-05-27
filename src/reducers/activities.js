import { FETCH_ACTIVITIES, EDIT_ACTIVITY, ADD_ACTIVITY, DELETE_ACTIVITY } from '../constants/ActionTypes'


const initialState = {}

function activitiesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return action.payload
        case EDIT_ACTIVITY:
            return {...state, [action.payload.id]: action.payload}
        case ADD_ACTIVITY:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_ACTIVITY:
            let newState = {...state}
            delete newState[action.payload]
            return newState
        default:
            return state
    }
}

export default activitiesReducer
