import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  font-size: 24px;
  color: #F2F2F2;
  margin: 2ex 0.75rem;
`

class Hero extends React.Component {
  render() {
    return(
      <HeroContainer>
        <p>Hello, {this.props.defendant.first_name} {this.props.defendant.last_name}.</p>
      </HeroContainer>
    );
  }
}

export default Hero;
