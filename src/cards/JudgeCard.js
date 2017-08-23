import React, { Component } from 'react';
import Card from './Card.js'

class JudgeCard extends React.Component {
  render() {
    return(
      <Card>
        <h3>Your judge</h3>
        <h1>{this.props.judge.name}</h1>
        <img src={this.props.judge.photo_url} />
      </Card>
    );
  }
}

export default JudgeCard;
