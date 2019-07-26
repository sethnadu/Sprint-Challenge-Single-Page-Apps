import React from 'react'
import {CharacterContainer, Paragraph, ParagraphCharacterLast, Span} from "./styles.js";

export default function CharacterCard ({ props }) {
  const { name, status, species, gender, location, image, } = props;
  // console.log(props);
  // console.log(location.name);
  return (
    <CharacterContainer>
      <h2>{name}</h2>
      <img alt= {`${name} image`} src ={image} />
      <Paragraph>Status: <Span>{status}</Span></Paragraph>
      <Paragraph>Species: <Span>{species}</Span></Paragraph>
      <Paragraph>Gender: <Span>{gender}</Span></Paragraph>
      <ParagraphCharacterLast>Location: <Span>{location.name}</Span></ParagraphCharacterLast>
    </CharacterContainer>
  );
}
