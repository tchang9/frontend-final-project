import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopicContainer from './TopicContainer'
import ScheduleContainer from './ScheduleContainer'
import TopicsContainer from './TopicsContainer'
import AddTopicForm from '../components/AddTopicForm'
import AddActivityForm from '../components/AddActivityForm'


const BodyContainer = () => {
    return (
        <> 
            <Switch>
                <Route path='/profile/events/:event/topics/add' component = {AddTopicForm} />
                <Route path='/profile/events/:event/topics/:topic' component = {TopicContainer} />
                <Route path='/profile/events/:event/schedule/add' component = {AddActivityForm} />
                <Route path='/profile/events/:event/schedule/activities/edit/:activity' component = {AddActivityForm} />
                <Route path='/profile/events/:event/schedule' component = {ScheduleContainer} />
                <Route path='/profile/events/:event/topics' component = {TopicsContainer} />
                <Route path={`/profile/events/:event`} />
            </Switch>
        </>
    )
}

export default BodyContainer
