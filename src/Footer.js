import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  margin: 1rem;

  & a {
    color: white;
    text-decoration: underline;
  }
`

class Footer extends React.Component {
  render() {
    return(
      <StyledFooter>
        A <a href="http://neutralground.com">Neutral Ground</a> Project
      </StyledFooter>
    );
  }
}

export default Footer
