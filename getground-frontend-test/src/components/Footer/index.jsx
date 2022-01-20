import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;

  strong {
    color: #1C444E;
    font-weight: 700;
    text-align: center;

    & a {
      color: #E26227;
    }
  }
`;


export default function Footer() {
  return (
    <Container>
      <strong>
        Developed by{" "}
        <a
          href="https://github.com/BrunnaRocha"
          target="_blank"
          rel="noreferrer"
        >
          Brunna Rocha
        </a>
      </strong>
    </Container>
  );
}