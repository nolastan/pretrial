import React from 'react'
import Card from './Card'

class Counsel extends React.Component {
  render() {
    return(
      <div>
      <Card title="Your public defender" thumbnail={this.props.counsel && this.props.counsel.photo_url}>
        <p>{this.props.counsel && this.props.counsel.name}</p>
      </Card>

      <Card title="Your lawyer">
        <p>{!this.props.counsel &&this.state.record.docket.counsel}</p>
      </Card>
      </div>
    )
  }
}

export default Counsel
