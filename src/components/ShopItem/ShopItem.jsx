import React from 'react';
import styled from './ShopItem.module.css';

export const ShopItem = (props) => {
  const { data } = props;

  return (
    <div className={styled.item}>
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
