import React from 'react';
import Styled from "styled-components";

export const Container = Styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

export const CharacterContainer = Styled.div `
    border: 2px solid gray;
    padding: 5px;
    margin: 10px auto 10px;
    box-shadow: 5px 5px 10px gray;
    text-align: center;
    background-color: lightblue;

`

export const CardContainer = Styled.div `
  text-align: left;
  border: 2px solid gray;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 45%;
  box-shadow: 5px 5px 10px gray;
  background-color: lightblue;
  
`

export const Paragraph = Styled.p `
  font-size: 1rem;
  color: black;
`

export const ParagraphLast = Styled.p `
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
  color: black;
  border: 2px solid gray;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin: 5px auto 5px auto;
  width: 120px;
  
`

export const ParagraphCharacterLast = Styled.p `
display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
  color: black;
  border: 2px solid gray;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin: 5px auto 5px auto;
  width: 250px;
`

export const Span = Styled.span `
  font-size: 1.2rem;
  font-weight: bold;
  color: gray;
`