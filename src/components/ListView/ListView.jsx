import React from 'react';
import { ShopItem } from '../ShopItem/ShopItem';
import styled from './ListView.module.css';

const ListView = (props) => {
  const { items } = props;

  return (
    <div className={styled.list}>
      {items.map((item, index) => (
        <ShopItem data={item} key={index} />
      ))}
    </div>
  );
};

export default ListView;
