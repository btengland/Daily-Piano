import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Main/Auth/Auth'
import Main from './Components/Main/Main'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/main' component={Main}/>
    </Switch>
)