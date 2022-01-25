import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BooksTable from "../BooksTable";
import { useDispatch } from "react-redux";
import { fetchBooks } from './actions';
import { useParams } from "react-router-dom";

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
  const { page } = useParams();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(page, itemsPerPage))
  }, [page, itemsPerPage]);

  return (
    <Container>
      <Title>GetGround Library</Title>
      <Description>
        Search for a registered book from our API:
      </Description>
      <BooksTable
        currentPage={page - 1}
        onChangeRowsPerPage={setItemsPerPage}
        rowsPerPage={itemsPerPage}
      />
    </Container>
  );
}


