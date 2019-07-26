import React, { useEffect, useState } from 'react';
import axios from "axios"
import LocationCard from "./LocationCard";

import {Container, TabHeading, ButtonDiv, Buttons} from "./styles.js";





export default function LocationsList() {
    const [location, setLocation] = useState('');
    const [change, setChange] = useState("https://rickandmortyapi.com/api/location/")

  

    useEffect(() => {
      axios
        // .get(`https://rickandmortyapi.com/api/location/`)
        .get(`${change}`)
        .then(response => {
          setLocation(response.data.results)
          setChange(response.data.info)
          
         
        })
        .catch(error => {
          console.log("Something went Wrong!", error);
        });
    }, [change]);

    return <section>
        <TabHeading>Locations</TabHeading>
        <ButtonDiv>
          <Buttons onClick = {() => setChange(change.prev)}>Previous</Buttons>
          <Buttons onClick = {() => setChange(change.next)}>Next</Buttons>
        </ButtonDiv>
    <Container className='character-list grid-view'>
        {Object.values(location).map(props => {
        // console.log(props)
        return (  <LocationCard props = {props}  key = {props.id} />
        )
        })}
    </Container>
</section>

}
