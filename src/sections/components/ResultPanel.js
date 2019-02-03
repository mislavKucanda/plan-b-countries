import React, { Component } from 'react';
import styled from 'styled-components';

import starIcon from '../../theme/assets/star.png';

const Container = styled.div`
  width: 110px;
  position: absolute;
  right: 10px;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Star = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 0 1px 10px;
`;

export class ResultPanel extends Component {
  render() {
    const { score } = this.props;

    return (
      <Container>
        {score} <Star src={starIcon} />
      </Container>
    );
  }
}
