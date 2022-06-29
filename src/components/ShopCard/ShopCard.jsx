import React from 'react';
import styled from './ShopCard.module.css';

const ShopCard = (props) => {
  const { data } = props;

  return (
    <div className={styled.card}>
      <div className={styled.title}>{data.name}</div>
      <div>{data.color}</div>
      <div className={styled.image}>
        <img src={data.img} alt="" />
      </div>

      <div className={styled.bottom}>
        <div>{data.price}</div>
        <button>Add to card</button>
      </div>
    </div>
  );
};

export default ShopCard;
