import React, { Component } from 'react';
import Search from './Search'
import Docket from './Docket'
import Footer from './Footer'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import Color from './Colors'

const StyledApp = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const Container = styled.div`
  padding: 0;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  font-family: 'Cabin', sans-serif;
  color: #F2F2F2;
  background-image: linear-gradient(-135deg,
    ${Color.gradient.end} 0%,
    ${Color.gradient.start} 100%
  );
  background-attachment: static;
  line-height: 1.4;
`

class App extends Component {

  render() {
    return (
      <Container>
        <StyledApp>
          <Switch>
            <Route exact path='/' component={Search}/>
            <Route path='/docket/:number' component={Docket}/>
          </Switch>
          <Footer />
        </StyledApp>
      </Container>
    )
  }
}

export default App;
