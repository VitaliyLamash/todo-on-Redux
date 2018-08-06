import React from "react";
import styled from 'styled-components';

export const InputForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input type="text" value={props.value} onChange={props.handleChange} />
      <Button>Save</Button>
    </form>
  );
};
const Input = styled.input`
display: flex;
width: 850px;
height: 50px;
margin: 0 auto;
text-align: center;
border-radius: 15px;
background-color: #fffdbf;
font-size: 25px;
`

const Button = styled.button`
display: flex;
border-radius: 10px;
background-color: yellow;
`;
