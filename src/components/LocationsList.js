import React, { useEffect, useState } from 'react';
import axios from "axios"
import LocationCard from "./LocationCard";

import {Container} from "./styles.js";





export default function LocationsList() {
    const [location, setLocation] = useState('');

  

    useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
          setLocation(response.data.results)
          
         
        })
        .catch(error => {
          console.log("Something went Wrong!", error);
        });
    }, []);

    return <section className='character-list grid-view'>
    <Container>
        {Object.values(location).map(props => {
        console.log(props)
        return (  <LocationCard props = {props}  key = {props.id} />
        )
        })}
    </Container>
</section>

}
