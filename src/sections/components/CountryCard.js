import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { DragSource } from 'react-dnd';

import { colors } from '../../theme/colors';
import { Store } from '../../mobx/store';

import locationIcon from '../../theme/assets/location.png';


const Container = styled.div`
  background-color: ${colors.blue};
  margin-top: 10px;
  height: 60px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.cardTextColor};
  ${props => props.isDragging && 'opacity: 0.2;'}
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;

const cardSource = {
  beginDrag(props) {
    console.log('beginDrag props: ', props);
    Store.draggedCountry = props.country;
    return { cardProps: props };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@observer
class CountryCardComponent extends Component {
  render() {
    const { country: { name }, connectDragSource, isDragging }  = this.props;

    return connectDragSource(
      <div>
        <Container isDragging={isDragging}>
          <Icon src={locationIcon} />
          {name}
        </Container>
      </div>
    );
  }
}

export const CountryCard = DragSource('card', cardSource, collect)(CountryCardComponent);
