import eventsReducer from './events'
import topicsReducer from './topics'
import commentsReducer from './comments'
import { combineReducers } from 'redux'
import activeEventIdReducer from './activeEventId'
import activeTopicIdReducer from './activeTopicId'
import loginReducer from './currentUser'

// function reducer(state = initialState, action) {
//     switch(action.type) {
//         case "GET_EVENTS":
//             return {
//                 ...state, events: action.payload
//             }
//         case "GET_TOPICS":
//             return {
//                 ...state, topics: action.payload
//             }
//         case "SET_EVENT":
//             return {
//                 ...state, currentEvent: action.payload
//             }
//         case "GET_COMMENTS":
//             return {
//                 ...state, comments: action.payload
//             }
//         default: 
//             return state
//     }
// }

export default combineReducers({
    events: eventsReducer,
    topics: topicsReducer,
    activeEventId: activeEventIdReducer,
    comments: commentsReducer,
    activeTopicId: activeTopicIdReducer,
    currentUser: loginReducer
})

// events: {4: {event}, 5: {event} }

// delete events["4"]
