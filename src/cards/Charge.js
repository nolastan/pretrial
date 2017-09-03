import React from 'react'
import Card from './Card'

class Charge extends React.Component {

  render() {
    return(
      <Card title={this.props.charge.counts +
        " count" + (this.props.charge.counts > 1 && "s" || "")}>
        <div>{this.props.charge.statute}</div>
        <p>{this.props.charge.description}</p>
      </Card>
    )
  }
}

export default Charge
