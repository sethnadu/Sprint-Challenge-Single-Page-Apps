import React, { useEffect, useState } from 'react';
import axios from "axios"
import EpisodeCard from "./EpisodeCard";
import {Container, TabHeading, ButtonDiv, Buttons} from "./styles.js";




export default function EpisodesList() {
    const [episode, setEpisode] = useState('');
    const [change, setChange] = useState("https://rickandmortyapi.com/api/episode/")

  

    useEffect(() => {
      axios
        // .get(`https://rickandmortyapi.com/api/episode/`)
        .get(`${change}`)
        .then(response => {
          setEpisode(response.data.results)
          setChange(response.data.info)
          
         
        })
        .catch(error => {
          console.log("Something went Wrong!", error);
        });
    }, [change]);

    return <section>
      <TabHeading>Episodes</TabHeading>
        <ButtonDiv>
        <Buttons onClick = {() => setChange(change.prev)}>Previous</Buttons>
        <Buttons onClick = {() => setChange(change.next)}>Next</Buttons>
        </ButtonDiv>
    <Container className='character-list grid-view'>
        {Object.values(episode).map(props => {
        // console.log(props)
        return (  <EpisodeCard props = {props}  key = {props.id} />
        )
        })}
    </Container>
</section>

}
