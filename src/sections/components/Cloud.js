import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

import arrowIcon from '../../theme/assets/arrow-icon.png';

const Container = styled.div` 
  position: absolute;
  width: 220px;
  height: 155px;
  background-color: ${colors.grey};
  top: -5px;
  left: -5px;
  display: flex;
    align-items: center;
`;

const Text = styled.div`
  padding: 10px;
  font-size: 13px;
  color: ${colors.boardTextColor};
  text-align: center;
`;

const ArrowIcon = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: -40px;
  left: 90px;
`;

export class Cloud extends Component {
  render() {
    return (
      <Container>
        <Text>
          Drop all countries to appropriate continent boxes.
        </Text>
        <ArrowIcon src={arrowIcon} />
      </Container>
    );
  }
}
