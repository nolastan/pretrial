import React, { Component } from 'react';

class CounselCard extends React.Component {
  render() {
    return(
      <div>
        <h3>Your public defender</h3>
        <h1>{this.props.counsel.name}</h1>
        <img src={this.props.counsel.photo_url} />
      </div>
    );
  }
}

export default CounselCard;
