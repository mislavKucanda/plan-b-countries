import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../theme/colors';

import leftHeaderEndIcon from '../theme/assets/left-header-end.png';
import rightHeaderEndIcon from '../theme/assets/right-header-end.png';
import globeIcon from '../theme/assets/globe-icon.png';

const HeaderContainer = styled.div`
  margin: 20px auto 50px auto;
  height: 50px;
  background-color: ${colors.blue};
  max-width: 1100px;
  position: relative;
  display: flex;
  align-items: center;
`;

const RightHeaderImageEnd = styled.img`
  position: absolute;
  right: -25px;
  top: 25px;
  width: 50px;
  height: 50px;
`;

const LeftHeaderImageEnd = styled.img`
  position: absolute;
  left: -25px;
  top: 25px;
  width: 50px;
  height: 50px;
`;

const HeaderContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const GlobeIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 15px 0 80px;
`;

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LeftHeaderImageEnd src={leftHeaderEndIcon} />
        <RightHeaderImageEnd src={rightHeaderEndIcon} />
        <HeaderContent>
          <GlobeIcon src={globeIcon} /> PlanB Countries
        </HeaderContent>
      </HeaderContainer>
    );
  }
}
