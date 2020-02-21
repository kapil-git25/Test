
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from "./components/login"
import Search from "./components/search"

import {PageNotFound} from "./components/pageNotFound"

const router = (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/search' component={Search}/>
        <Route path="*" component={PageNotFound}/>
    </Switch>
)

export default router
