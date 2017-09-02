import React, { Component } from 'react';
import Card from './cards/Card'
import {withRouter} from 'react-router-dom'


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
      <form onSubmit={this.handleSubmit}>
        <label>
          Magistrate or Docket Number
          <input type="text" value={this.state.docket_number} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        <Card>
          <p>Can’t find your magistrate number or docket number?</p>
          <p>Search magistrate</p>
          <p>Search criminal court</p>
        </Card>
      </form>
    )
  }
}

export default withRouter(Search);
