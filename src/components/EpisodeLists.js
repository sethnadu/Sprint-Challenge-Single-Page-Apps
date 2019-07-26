import React, { useEffect, useState } from 'react';
import axios from "axios"
import EpisodeCard from "./EpisodeCard";
import {Container} from "./styles.js";




export default function EpisodesList() {
    const [episode, setEpisode] = useState('');

  

    useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
          setEpisode(response.data.results)
          
         
        })
        .catch(error => {
          console.log("Something went Wrong!", error);
        });
    }, []);

    return <section className='character-list grid-view'>
    <Container>
        {Object.values(episode).map(props => {
        console.log(props)
        return (  <EpisodeCard props = {props}  key = {props.id} />
        )
        })}
    </Container>
</section>

}
