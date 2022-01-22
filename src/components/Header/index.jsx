import React from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100vw;
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export default function Header() {
  return <Container />;
}