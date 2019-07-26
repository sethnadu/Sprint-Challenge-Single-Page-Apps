import React from 'react'
import Styled from "styled-components";

const HeadingColor = Styled.h1 `
  color: lightblue;

`;

export default function WelcomePage() {
  return <div className="welcome-page">
    <header>
      <HeadingColor>Welcome to the Ultimate Fan Site!</HeadingColor>
      <img className="main-img ui centered medium circular image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
    </header>
  </div>

}
