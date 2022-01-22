import React from "react";
import styled from "styled-components";
import BooksTable from "../BooksTable";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 75px;
  color: #1C444E;
  font-size: 50px;
`;

const Description = styled.h3`
  color: #E26227;
  margin-top: 100px;
  flex-wrap: wrap;
  text-align: center;
`;


export default function Home() {
  return (
    <Container>
      <Title>GetGround Librarie</Title>
      <Description>
      Please register your book or search for one already registered:
      </Description>
      <BooksTable />
    </Container>
  );
}
