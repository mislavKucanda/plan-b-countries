import React, { Component } from 'react';
import styled from 'styled-components';

import { Cloud } from './components/Cloud';

import { colors } from '../theme/colors';

import humanImage from '../theme/assets/human.png';

const InfoPanelContainer = styled.div`
  width: 210px;
  height: 400px;
  background-color: ${colors.blue};
  position: relative;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Human = styled.img`
  width: 90px;
  height: 210px;
  margin-bottom: 10px;
`;

export class InfoPanel extends Component {
  render() {
    return (
      <InfoPanelContainer>
        <Cloud />
        <Human src={humanImage} />
      </InfoPanelContainer>
    );
  }
}
