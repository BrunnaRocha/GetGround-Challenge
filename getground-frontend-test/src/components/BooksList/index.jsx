import React from "react";
import styled from "styled-components";


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


export default function BooksList() {
  return (
    <Container>
      <Title>GetGround Librarie</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        aliquet, ante vitae pulvinar efficitur, enim leo elementum nunc, non
        congue purus odio non magna. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Sed faucibus, diam
        lacinia imperdiet aliquet, velit leo volutpat ante, sed vestibulum arcu
        nibh vel ex. Sed nulla tortor, laoreet at convallis et, fringilla id
        metus. Vestibulum condimentum imperdiet lectus at fringilla. Morbi quis
        est tempor, convallis felis et, tristique nunc. Nullam feugiat mauris a
        congue facilisis.
      </Description>
    </Container>
  );
}
