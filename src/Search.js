import React, { Component } from 'react';
import Card from './cards/Card'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';

const Form = styled.form`
  margin: 1em 1em 3em 1em;
`

const Input = styled.input`
  width: 100%;
  font-size: 200%;
  border: 1px solid gray;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  margin: 0.5rem 0;
`

const Submit = styled.input`
  width: 100%;
  font-size: 200%;
  border: 1px solid gray;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  background: #EB5757;
  color: white;
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
        <Form onSubmit={this.handleSubmit}>
          <label>
            Magistrate or Docket Number
            <Input type="text"
              value={this.state.docket_number}
              onChange={this.handleChange}
              autoFocus="true" />
          </label>
          <Submit type="submit" value="Submit" />
        </Form>

        <Card href="http://www.opcso.org/dcktmstr/dcktmstr.php">
          Find your docket number →
        </Card>
      </div>
    )
  }
}

export default withRouter(Search);
