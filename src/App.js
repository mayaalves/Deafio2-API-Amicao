import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import DogPaw from "./Img/dogPaw.png";
import PawDog from "./Img/pawDog.png";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body{
  background-color: #CD853F;
  @media(max-width:800px){
    background-color: #FF7F50;
  }
}
`;

const Container = styled.div`
  background-image: url(${DogPaw});
  background-position: auto;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 800px) {
    background-image: url(${PawDog});
  }
`;
const Boxh1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const H1 = styled.h1`
  margin-top: 8vh;
  @media (max-width: 800px) {
    color: white;
  }
`;
const Div = styled.div`
  height: 86vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 1.5vh;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.8s;
    font-weight: bold;
  }
`;
const Img = styled.img`
  width: 60vh;
  height: 60vh;
  border-radius: 50vh;
`;

export default function Api() {
  const [dog, setDog] = useState();

  function DogList() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDog(response.data.message);
    });
  }

  /*useEffect(() => {
    return () => {};
  });*/

  return (
    <Container>
      <GlobalStyle />
      <Boxh1>
        <H1>Doguinhos?! Temos aqui!</H1>
      </Boxh1>
      <Div>
        <Button
          onClick={() => {
            DogList();
          }}
        >
          Encontre aqui seu Doguinho
        </Button>
        <Img src={dog} alt="" />
      </Div>
    </Container>
  );
}
