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
                <Route path='/profile/event1/topic1/add' component = {AddTopicForm} />
                <Route path='/profile/event1/topic1' component = {TopicContainer} />
                <Route path='/profile/event1/schedule/add' component = {AddActivityForm} />
                <Route path='/profile/event1/schedule' component = {ScheduleContainer} />
                <Route path='/profile/event1' component = {TopicsContainer} />
            </Switch>
        </>
    )
}

export default BodyContainer
