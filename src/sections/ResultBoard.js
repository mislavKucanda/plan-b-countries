import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../theme/colors';

import starIcon from '../theme/assets/star.png';
import prizeIcon from '../theme/assets/prize.png';

const ResultBoardContainer = styled.div`
  width: 220px;
  background-color: ${colors.grey};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  width: 220px;
  height: 15px;
  position: absolute;
  bottom: -15px;
  background-color: ${colors.blue};
`;

const TotalText = styled.div`
  margin-top: 105px;
  text-align: center;
  font-size: 30px;
  color: ${colors.boardTextColor};
`;

const Result = styled.div`
  font-size: 25px;
  color: ${colors.boardTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Star = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const Prize = styled.img`
  width: 90px;
  height: 120px;
  margin-top: 80px;
`;

export class ResultBoard extends Component {
  render() {
    return (
      <ResultBoardContainer>
        <TotalText>Total:</TotalText>
        <Result>
          45 <Star src={starIcon} />
        </Result>
        <Prize src={prizeIcon} />
        <Divider />
      </ResultBoardContainer>
    );
  }
}
