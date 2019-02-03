import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../theme/colors';

const ResultBoardContainer = styled.div`
  width: 220px;
  background-color: ${colors.grey};
`;

export class ResultBoard extends Component {
  render() {
    return (
      <ResultBoardContainer>Result Board</ResultBoardContainer>
    );
  }
}
