import React, { useEffect, useState } from 'react';
import CharacterCard from "./CharacterCard.js";
import axios from "axios";

export default function CharacterList() {
  const [character, setCharacter] = useState('');

  

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacter(response.data.results)
        
       
      })
      .catch(error => {
        console.log("Something went Wrong!", error);
      });
  }, []);

  return <section className='character-list grid-view'>

        {Object.values(character).map(props => {
        console.log(props)
        return (  <CharacterCard props = {props}  key = {props.id} />
        )
        })}
    </section>

}
