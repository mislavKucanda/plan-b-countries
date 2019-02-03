import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

const Container = styled.div`
  background-color: ${colors.grey};
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.boardTextColor};
`;

export class ContinentHeader extends Component {
  render() {
    return (
      <Container>
        Europe
      </Container>
    );
  }
}
