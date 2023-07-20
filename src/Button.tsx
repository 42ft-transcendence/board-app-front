import React from "react";

export interface ButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      style={{ width: "120px", height: "40px",  marginInline: "35px", backgroundColor: "#E5EAF5", color: "#494D5F", borderRadius: "10px"}}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button;