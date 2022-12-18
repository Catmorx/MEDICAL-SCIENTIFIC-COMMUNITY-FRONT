import React from "react";
import "./forms.css";

export default function Input(props) {
  const { children, type, value, onChange, id, name, className = "", borderBottom="solid 1px", required} = props;

  return (
    <input
      className={"input " + className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={children}
      id={id}
      name={name}
      style={{borderBottom: borderBottom}}
      required={required}
    ></input>
  );
}
