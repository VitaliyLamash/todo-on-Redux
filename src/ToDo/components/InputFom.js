import React from "react";
import styled from 'styled-components';


export const InputForm = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Input type="text" value={props.value} onChange={props.handleChange} />
      <Button>Save</Button>
    </Form>
  );
};


const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 850px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  border-radius: 15px;
  background-color: #fffdbf;
  font-size: 25px;
`;

const Button = styled.button`
  width: auto;
  text-align: center;
  margin: 0 auto;
  background-color: #fffdbf;
  font-size: 25px;
  border-radius: 15px;
  height: 50px;
  width: 150px;
`;
