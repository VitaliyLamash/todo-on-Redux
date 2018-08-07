import React from "react";
import styled from 'styled-components';

export const StateButtons = ({hanleShow, typeShow}) => {
  console.log(typeShow)
  return (
    <Buttons>
      <Button typeShow={typeShow} onClick={() => hanleShow('all')}>Show All</Button>
      <Button typeShow={typeShow} onClick={() => hanleShow('checked')}>Show Checked</Button>
    </Buttons>
  );
};

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

const Button = styled.button`
  margin-top: 5px;
  background-color: #fffdbf;
  font-size: 25px;
  border-radius: 10px;
  transition: 0.5s;
  &:first-child{
    background-color: ${props => (props.typeShow === 'all' ? '#FFD89E' : '#fff2bf')};
  }
  &:last-child{
    background-color: ${props => (props.typeShow === 'checked' ? '#FFD89E' : '#fff2bf')};
  }
  
`;
