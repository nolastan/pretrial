import React, { Component } from 'react';

class JudgeCard extends React.Component {
  render() {
    return(
      <div>
        <h3>Your judge</h3>
        <h1>{this.props.judge.name}</h1>
        <img src={this.props.judge.photo_url} />
      </div>
    );
  }
}

export default JudgeCard;
