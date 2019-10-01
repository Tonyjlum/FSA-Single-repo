import React from "react"
import PropTypes from "prop-types"
import '../app.css';

import {BrowserRouter, Switch, Route} from "react-router-dom"

import HelloWorld from './HelloWorld.js'
import Login from './login.js'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" render={() => <Login />}/>

          <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
