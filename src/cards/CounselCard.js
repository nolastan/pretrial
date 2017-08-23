import React, { Component } from 'react';
import Card from './Card.js'

class CounselCard extends React.Component {
  render() {
    return(
      <Card>
        <h3>Your public defender</h3>
        <h1>{this.props.counsel.name}</h1>
        <img src={this.props.counsel.photo_url} />
      </Card>
    );
  }
}

export default CounselCard;
