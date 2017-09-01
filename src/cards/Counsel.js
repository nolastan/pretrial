import React from 'react'
import Card from './Card'

class Counsel extends React.Component {

  state = {counsel: {}}

  componentDidMount() {
    if(!this.props.counsel_name) { return null }

    // fetch(`http://localhost:3001/api/counsels/${this.props.counsel_name}`)
    fetch(`https://homewardnola.herokuapp.com/api/counsels/${this.props.counsel_name}`)
      .then(res => res.json())
      .then(counsel => this.setState({counsel: counsel}))
  }

  render() {
    if(!this.props.counsel_name) { return null }

    return(
      <Card title={this.state.counsel.position || "Defense Attorney"} thumbnail={this.state.counsel.photo_url}>
        <p>{this.state.counsel.name}</p>
      </Card>
    )
  }
}

export default Counsel
