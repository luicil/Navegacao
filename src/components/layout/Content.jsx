import React from 'react'
import './Content.css'
import { Switch, Route } from 'react-router-dom'
import About from '../../views/samples/About'
import Home from '../../views/samples/Home'
import Param from '../../views/samples/Param'
import NotFound from '../../views/samples/NotFound'

const Content = props => {
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/about">
                    <About></About>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/param/:id">
                    <Param></Param>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/param">
                    <Param></Param>
                </Route>
            </Switch>
            <Switch>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
            <Switch>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}

export default Content