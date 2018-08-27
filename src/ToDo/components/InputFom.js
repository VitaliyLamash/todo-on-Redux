import React from "react";
import styled from "styled-components";

export const InputForm = ({ handleSubmit, handleChange, value }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={handleChange} />
      <Button>Save</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 450px;
  height: 30px;
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
  height: 30px;
  width: 100px;
`;
