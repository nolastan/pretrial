import React from 'react'
import Card from './Card'

import CounselData from '../data/counsels.json';

class Counsel extends React.Component {

  render() {
    if(!this.props.counsel) { return null }

    var counsel = CounselData.data[this.props.counsel]

    if(counsel) {
      return(
        <Card title="Your public defender" thumbnail={counsel.photo_url}>
          <p>{counsel.name}</p>
        </Card>
      )
    } else {
      return(
        <Card title="Your lawyer">
          {this.props.counsel}
        </Card>
      )
    }
  }
}

export default Counsel
