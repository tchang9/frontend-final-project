import { LOGIN } from '../constants/ActionTypes'


const initialState = {}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return action.payload
        default:
            return state
    }
}

export default loginReducer