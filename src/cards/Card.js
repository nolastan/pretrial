import styled from 'styled-components';

const Card = styled.a`
  display: block;
  padding: 1em;
  margin: 1ex 1em;
  background: #FDFDFD;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  transition: 0.1s box-shadow ease-in;
  color: #333333;

  &:hover {
    background: white;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
  }
`

export default Card;
