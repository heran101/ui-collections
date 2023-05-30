import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 32px;
  height: 16px;
  background: #b3b3b3;
  border-radius: 20px;
  padding: 0;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 20px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(12px, -50%);
    }
  }
`;

const CMSwitch = () => {
  const [checked, setChecked] = useState(false); // store value

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />

      <Switch />
      <span>Toggle is {checked ? "on" : "off"}</span>
    </Label>
  );
};

export default CMSwitch;
