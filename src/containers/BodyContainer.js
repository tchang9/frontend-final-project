import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopicContainer from './TopicContainer'
import ScheduleContainer from './ScheduleContainer'
import TopicsContainer from './TopicsContainer'
import EditEventForm from '../components/EditEventForm'
import ParticipantsContainer from './ParticipantsContainer'


const BodyContainer = () => {
    return (
        <> 
            <Switch>
                <Route path='/profile/events/edit/:event' component = {EditEventForm} />
                <Route path='/profile/events/:event/topics/:topic' component = {TopicContainer} />
                <Route path='/profile/events/:event/participants' component = {ParticipantsContainer} />
                <Route path='/profile/events/:event/schedule' component = {ScheduleContainer} />
                <Route path='/profile/events/:event/topics' component = {TopicsContainer} />
                <Route path={`/profile/events/:event`} />
            </Switch>
        </>
    )
}

export default BodyContainer
