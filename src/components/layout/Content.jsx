import React from 'react'
import './Content.css'
import{Switch, Route} from 'react-router-dom'
import About from '../../views/samples/About'
import Home from '../../views/samples/Home'
import Param from '../../views/samples/Param'

const Content = props => {
    return (
        <main className="Content">
            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
            </Switch>
            <Switch>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
            <Switch>
                <Route path="/param/:id">
                    <Param></Param>
                </Route>
            </Switch>
            <Switch>
                <Route path="/param">
                    <Param></Param>
                </Route>
            </Switch>
        </main>
    )
}

export default Content