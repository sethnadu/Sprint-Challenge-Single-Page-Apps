import React from 'react';
import {CardContainer, Paragraph, ParagraphLast, Span} from "./styles.js";


export default function EpisodeCard ({ props }) {
  const {name, air_date, episode, characters } = props;
  // console.log(characters.length);


  return (
      <CardContainer>
        <h2>{name}</h2>
        <Paragraph>Date: <Span>{air_date}</Span></Paragraph>
        <Paragraph>Episode: <Span>{episode}</Span></Paragraph>
        <ParagraphLast><Span>{characters.length}</Span> Characters</ParagraphLast>
      </CardContainer>
  )
}
