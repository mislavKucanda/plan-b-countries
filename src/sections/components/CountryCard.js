import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

import locationIcon from '../../theme/assets/location.png';

const Container = styled.div`
  background-color: ${colors.blue};
  margin-top: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.cardTextColor};
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;

export class CountryCard extends Component {
  render() {
    return (
      <Container>
        <Icon src={locationIcon} />
        Monte Negro
      </Container>
    );
  }
}
