import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import styled from './CardsView.module.css';

const CardsView = (props) => {
  const { cards } = props;

  return (
    <div className={styled.cards}>
      {cards.map((card, index) => (
        <ShopCard data={card} key={index} />
      ))}
    </div>
  );
};

export default CardsView;
