import React from 'react';
import styled from 'styled-components';
import Card from './cards/Card.js';

const Sentence = styled.p`
  text-transform: lowercase;

  &:first-letter {
      text-transform: uppercase;
  }
`

class Entry extends React.Component {
  render() {
    return(
      <Card title={this.props.update.date}>
        <ol>
        {this.props.update["entries"].map(function(entry, n) {
          return (<li key={"entry-"+n}><Sentence> • {entry}</Sentence></li>)
        })}
        </ol>
      </Card>
    );
  }
}

export default Entry
