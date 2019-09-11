import { combineReducers } from 'redux'
import eventsReducer from './events'
import topicsReducer from './topics'
import commentsReducer from './comments'
import activeEventIdReducer from './activeEventId'
import activeTopicIdReducer from './activeTopicId'
import loginReducer from './currentUser'
import activitiesReducer from './activities'
import eventUsersReducer from './eventUsers'

export default combineReducers({
    events: eventsReducer,
    topics: topicsReducer,
    activeEventId: activeEventIdReducer,
    comments: commentsReducer,
    activeTopicId: activeTopicIdReducer,
    currentUser: loginReducer,
    activities: activitiesReducer,
    eventUsers: eventUsersReducer
})
