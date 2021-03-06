import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Main/Auth/Auth'
import Home from './Components/Main/Home/Home'
import Practice from './Components/Main/Practice/Practice'
import Appointment from './Components/Main/Appointment/Appointment'
import Admin from './Components/Main/Admin/Admin'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/home' component={Home}/>
        <Route path='/practice' component={Practice}/>
        <Route path='/appointment' component={Appointment}/>
        <Route path='/admin' component={Admin}/>
    </Switch>
)