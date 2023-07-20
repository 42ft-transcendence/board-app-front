import React from "react";
import { styled } from "styled-components";

export interface ButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  margin-inline: 35px;
  background-color: #E5EAF5;
  color: #494D5F;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.25);
`;