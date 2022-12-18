import React from "react";
import "./forms.css";

export default function Input(props) {
  const { children, type, value, onChange, id, name, className = "" } = props;

  return (
    <input
      className={"input " + className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={children}
      id={id}
      name={name}
    ></input>
  );
}
