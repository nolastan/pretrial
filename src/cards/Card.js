import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.a`
  display: block;
  margin: 1ex 1em;
  background: #FDFDFD;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  transition: 0.1s box-shadow ease-in;
  color: #333333;
  overflow: hidden;

  &:hover {
    background: white;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
  }
`


const Body = styled.div`
  display: flex;
  padding: 1em;
`

const Content = styled.div`
  flex: 1;
`

const Title = styled.h3`
  font-size: 13px;
  color: #828282;
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  align-self: flex-end;
`

const Banner = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`


class Card extends React.Component {
  render() {
    return(
      <StyledCard href={this.props.href}>
        {this.props.banner && <Banner image={this.props.banner} />}
        <Body>
          <Content>
            <Title>{this.props.title}</Title>
            {this.props.children}
          </Content>
          {this.props.thumbnail && <Thumbnail src={this.props.thumbnail} />}
        </Body>
      </StyledCard>
    );
  }
}

export default Card
