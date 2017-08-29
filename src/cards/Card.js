import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.a`
  display: block;
  padding: 1em;
  margin: 1ex 1em;
  background: #FDFDFD;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  transition: 0.1s box-shadow ease-in;
  color: #333333;
  display: flex;

  &:hover {
    background: white;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
  }
`

const CardContent = styled.div`
  flex: 1;
`

const CardTitle = styled.h3`
  font-size: 13px;
  color: #828282;
`

const CardThumbnail = styled.img`
  width: 100px;
  height: 100px;
  align-self: flex-end;
`

class Card extends React.Component {
  render() {
    return(
      <Container>
        <CardContent>
          <CardTitle>{this.props.title}</CardTitle>
          <p>{this.props.entity.name}</p>
          {this.props.children}
        </CardContent>
        <CardThumbnail src={this.props.entity.photo_url} />
      </Container>
    );
  }
}

export default Card
