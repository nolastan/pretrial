import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Color from '../Colors'

const StyledButton = styled.button`
  width: 100%;
  font-size: 150%;
  font-weight: 300;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  background: ${Color.accent};
  color: ${Color.white};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  cursor: pointer;
  -webkit-appearance: none;
  transition: box-shadow 1px ease-in;

  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.15);
    background: ${Color.accentFocus};
  }

  &:active {
    background: ${Color.accentFocus};
    box-shadow: none;
  }
`

class Button extends React.Component {
  render() {
    return(
      <StyledButton>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button
export const FormButton = StyledButton.withComponent('input')
