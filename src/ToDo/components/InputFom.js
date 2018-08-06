import React from "react";
import styled from 'styled-components';

export const InputForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <Button>Save</Button>
    </form>
  );
};

const Button = styled.button`
display: flex;
border-radius: 10px;
background-color: yellow;
`;
