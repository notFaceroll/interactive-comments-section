import React from "react";
import styled from "styled-components";

const Button = styled.button`
background-color: hsl(238, 40%, 52%);
color: #fff;
border-radius: 8px;
padding: .7rem 1.4rem;
text-transform: uppercase;
font-weight: bold;
border: none;
cursor: pointer;
`

const GeneralButton = (props) => {
  return <Button type={props.type}>{props.label}</Button>;
};


export default GeneralButton;