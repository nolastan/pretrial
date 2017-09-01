import React, { Component } from 'react';
import Docket from './Docket'
import Card from './cards/Card'

class Search extends Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    docket_number: "526295",
    show_docket: false
  }

  handleChange(e) {
    this.setState({docket_number: e.target.value})
  }

  handleSubmit(e) {
    this.setState({show_docket: true})
  }

  render() {
    if(this.state.show_docket) {
      return <Docket number={this.state.docket_number} />
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Magistrate or Docket Number
            <input type="text" value={this.state.docket_number} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />

          <Card>
            <p>Can’t find your magistrate number or docket number?</p>
            <p><a href="#">Search magistrate</a></p>
            <p><a href="#">Search criminal court</a></p>
          </Card>
        </form>
      )
    }
  }
}

export default Search;
