import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;

  ${props => (props.type === "primary" ? `background: #2196f3` : null)}
  ${props => (props.type === "success" ? `background: #4caf50` : null)}
  ${props => (props.type === "danger" ? `background: #f44336` : null)}
  ${props => (props.type === "warning" ? `background: #fdd835` : null)}
`;

export default Button;
