import React, { useState } from 'react';
import CardsView from '../CardsView/CardsView';
import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';
import styled from './Store.module.css';

export const Store = (props) => {
  const { products } = props;

  const [icon, setIcon] = useState('view_list');

  return (
    <div className={styled.store}>
      <div className={styled.header}>
        <IconSwitch
          icon={icon}
          onSwitch={() => (icon === 'view_list' ? setIcon('view_module') : setIcon('view_list'))}
        />
      </div>
      <div>{icon === 'view_list' ? <ListView items={products} /> : <CardsView cards={products} />}</div>
    </div>
  );
};
