import React, { Component } from 'react';
import {Card, CardLabel, CardThumbnail, CardContent} from './Card.js';

class CounselCard extends React.Component {
  render() {
    return(
      <Card>
        <CardContent>
          <CardLabel>Your public defender</CardLabel>
          <h1>{this.props.counsel.name}</h1>
        </CardContent>
        <CardThumbnail src={this.props.counsel.photo_url} />
      </Card>
    );
  }
}

export default CounselCard;
