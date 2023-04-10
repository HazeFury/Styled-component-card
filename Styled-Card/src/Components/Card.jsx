import React from "react";
import "../App.jsx";
import james from "../assets/james.jpg";
import styled from "styled-components";

const Container = styled.div`
  height: 750px;
  width: 900px;
  border: solid black 3px;
  border-radius: 20px;
  background-color: #31403b;
`;

const Flex = styled.div`
  display: flex;
  padding: 10px;
`;

const Picture = styled.div`
  height: 500px;
  width: 333px;
  border-radius: 15px;
  border: solid black 2px;
  margin-left: 15px;
  background: url(https://static.posters.cz/image/1300/affiches-et-posters/james-bond-no-time-to-die-profile-i114389.jpg)
    no-repeat;
  background-size: contain;
`;

const Data = styled.div`
  height: 500px;
  width: 500px;
  border: solid white 2px;
  border-radius: 15px;
  margin-left: 15px;
`;

const H1 = styled.h1`
  font-family: impact, sans-serif;
  font-size: 3rem;
  text-decoration: underline;
`;

const P = styled.p`
  font-family: courrier, sans-serif;
  font-size: 1.5rem;
  text-align: left;
  padding: 5px 0 0 10px;
`;

const Bouton = styled.button`
  font-family: impact, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  border: solid black 3px;
  width: 200px;
  height: 60px;
  background-color: yellow;
  color: black;
  margin-top: 15px;
`;

const Card = () => {
  return (
    <Container>
      <h1>On display</h1>
      <Flex>
        <Picture></Picture>
        <Data>
          <H1>No time to die</H1>
          <P>Release Date : October 6th, 2021</P>
          <P>Type : Thriller, Spying</P>
          <P>Featuring : Daniel Craig, Léa Seydoux, Rami Malek</P>
          <P>Length : 2h43</P>
          <P>Rating : 4,5/5</P>
        </Data>
      </Flex>
      <Bouton>Watch Now</Bouton>
    </Container>
  );
};

export default Card;
