import React from 'react';
import styled from './IconSwitch.module.css';

const IconSwitch = (props) => {
  const { icon, onSwitch } = props;

  return (
    <div>
      <button className={styled.btn} onClick={onSwitch}>
        <span class="material-icons">{icon}</span>
      </button>
    </div>
  );
};

export default IconSwitch;
