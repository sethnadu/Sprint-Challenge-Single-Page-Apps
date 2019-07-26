import React from 'react';
import {CardContainer, Paragraph, ParagraphLast, Span} from "./styles.js";


export default function LocationCard ({ props }) {
  const {name, type, dimension, residents } = props;
  console.log(residents.length);


  return (
      <CardContainer>
        <h2>{name}</h2>
        <Paragraph>Type: <Span>{type}</Span></Paragraph>
        <Paragraph>Dimension: <Span>{dimension}</Span></Paragraph>
        <ParagraphLast><Span>{residents.length}</Span> Residents</ParagraphLast>
      </CardContainer>
  )
}
