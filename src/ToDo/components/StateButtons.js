import React from "react";
import styled from 'styled-components';

export const StateButtons = (props) => {
  return (
    <Buttons>
      <button onClick={() => props.hanleShow('all')}>Show All</button>
      <button onClick={() => props.hanleShow('checked')}>Show Checked</button>
    </Buttons>
  );
};



const Buttons = styled.div`


& button{

}

`