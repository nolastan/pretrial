import React, { Component } from 'react';
import {Card, CardLabel, CardThumbnail, CardContent} from './Card.js';

class JudgeCard extends React.Component {
  render() {
    return(
      <Card>
        <CardContent>
          <CardLabel>Your judge</CardLabel>
          <h1>{this.props.judge.name}</h1>
        </CardContent>
        <CardThumbnail src={this.props.judge.photo_url} />
      </Card>
    );
  }
}

export default JudgeCard;
