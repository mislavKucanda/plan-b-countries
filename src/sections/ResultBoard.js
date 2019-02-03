import React, { Component } from 'react';
import styled from 'styled-components';

const ResultBoardContainer = styled.div`
  width: 220px;
`;

export class ResultBoard extends Component {
  render() {
    return (
      <ResultBoardContainer>Result Board</ResultBoardContainer>
    );
  }
}
