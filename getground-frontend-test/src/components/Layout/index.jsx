import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import BooksList from '../BooksList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <BooksList />
      <Footer />
    </Container>
  );
}
