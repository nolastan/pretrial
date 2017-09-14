import React, { Component } from 'react';
import Search from './Search'
import Docket from './Docket'
import Footer from './Footer'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route path='/docket/:number' component={Docket}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
