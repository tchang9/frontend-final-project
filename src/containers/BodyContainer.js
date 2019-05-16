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
                <Route path='/profile/events/:id/topics/add' component = {AddTopicForm} />
                <Route path='/profile/events/:id/topics/:id' component = {TopicContainer} />
                <Route path='/profile/event1/schedule/add' component = {AddActivityForm} />
                <Route path='/profile/event1/schedule' component = {ScheduleContainer} />
                <Route path='/profile/events/:id/topics' component = {TopicsContainer} />
                <Route path={`/profile/events/:id`} />
            </Switch>
        </>
    )
}

export default BodyContainer
