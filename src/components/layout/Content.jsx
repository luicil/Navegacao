import React from 'react'
import './Content.css'
import{Switch, Route} from 'react-router-dom'
import About from '../../views/samples/About'
import Home from '../../views/samples/Home'

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
        </main>
    )
}

export default Content