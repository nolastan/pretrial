import React, { Component } from 'react';
import Card from './cards/Card'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';
import Headline from './components/Headline';
import Byline from './components/Byline';
import {FormButton} from './components/Button';
import SearchField from './components/SearchField';

const Form = styled.form`
  margin: 2em 1em 3em 1em;
  align-items: flex-end;

  p {
    text-align: center;
    display: block;
    margin-top: 2em;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

  a {
    text-decoration: underline;
    color: white;
  }
`

const Input = styled.input`
  width: 100%;
  font-size: 200%;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: none;
`

class Search extends Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = { docket_number: 526521 }

  handleChange(e) {
    this.setState({docket_number: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.history.push("/docket/" + this.state.docket_number)
  }

  render() {
    return (
      <div>
        <Headline>Pretrial</Headline>
        <Byline>Navigate the New Orleans judicial system.</Byline>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="docket">Enter your docket number</label>
          <SearchField>
            <Input type="tel"
              id="docket"
              value={this.state.docket_number}
              onChange={this.handleChange}
              autoFocus="true" />
            <FormButton type="submit" value="→" />
          </SearchField>

          <p>Don't know your docket number?<br />
            <a href="http://www.opcso.org/dcktmstr/dcktmstr.php">
              Search the sheriff's website.
            </a>
          </p>
        </Form>

      </div>
    )
  }
}

export default withRouter(Search);
