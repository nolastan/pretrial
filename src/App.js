import React, { Component } from 'react';
import Search from './Search'
import Docket from './Docket'
import { HashRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Search}/>
        <Route path='/docket/:number' component={Docket}/>
      </Switch>
    )
  }
}

export default App;
