import React from "react"
import styled from 'styled-components';

const Label = styled.label`
font-size: 20px;
margin: 10px;
font-weight: 400;
`;
const Input = styled.input`
display: flex;
margin: 10px;
padding-left: 16px; 
width: 200px;
height: 30px;
font-size: 18px;
border-radius: 4px;
`;

export const Filter = ({value, onChange}) => (
    <>
    <Label>
          Find contacts by name 
  </Label>
    <Input type='text' value={value} onChange={onChange} /> 
    </>
)
