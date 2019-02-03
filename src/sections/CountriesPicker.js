import React, { Component } from 'react';
import styled from 'styled-components';

const CountriesPickerContainer = styled.div`
  width: 825px;
`;

export class CountriesPicker extends Component {
  render() {
    return (
      <CountriesPickerContainer>
        Countries Picker
      </CountriesPickerContainer>
    );
  }
}
