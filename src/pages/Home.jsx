import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import "../Default.css";

import Api from "../services/Api";

const Container = styled.div`
  width: 100%;
`;

const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  background-color: black;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  color: white;
  width: 150px;
  text-transform: capitalize;
  padding: 10px 0;
`;

const TitlePokemon = styled.h1`
  font-size: 32px;
  font-family: "Roboto", sans-serif;
`;

const CloseButton = styled.button``;
const PokeName = styled.h2`
text-transform: capitalize;
`;

export default function Home() {
  useEffect(() => {
    handleGet();
    todosPoke();
  }, []);

  const [show, setShow] = useState(false);  
  const [getApi, setGetApi] = useState([]);
  const [getAll, setGetAll] = useState([]);
  const [pokeName, setPokeName] = useState();
  const [pokemon, setPokemon] = useState([]);

  function handleGet() {
    Api.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((response) => {
      var pokeURL = response.data.results;
      setGetAll(pokeURL);
    });
  }

  function todosPoke() {
    console.log("asdfasdfasdf: ", getAll);
  }

  function modalPokemon(url) {
    setShow(true);

    console.log('qqqq: ', url)
    var urlPoke = url;
    Api.get(urlPoke).then((response) => {
      console.log("vacillo: ", response.data);
      var testePoke = response.data
      setPokemon(testePoke)
      console.log('pokeeeeeeee: ', testePoke.name)
    });
  }

  function closeModal() {
    setShow(false);
  }

  function openModal() {
    setShow(true);
  }

  return (
    <>
      <Container>
        <StyledContainer>
          <TitlePokemon>Pokédex</TitlePokemon>
          {getAll.map((res) => {
            return <StyledButton onClick={() => {modalPokemon(res.url)}}>{res.name}</StyledButton>;
          })}
        </StyledContainer>
      </Container>

      <Modal
      show = {show}
      onHide={() => {setShow(false)}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           <PokeName>{pokemon.name}</PokeName>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <CloseButton onClick={() => {closeModal()}}>Close</CloseButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
