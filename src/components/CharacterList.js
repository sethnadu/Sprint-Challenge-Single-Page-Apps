import React, { useEffect, useState } from 'react';
import CharacterCard from "./CharacterCard.js";
// import SearchForm from "./SearchForm.js";

// import { Route } from "react-router-dom";
import axios from "axios";
import {TabHeading, ButtonDiv, Buttons} from "./styles.js";

export default function CharacterList() {
  const [character, setCharacter] = useState('');
  const [change, setChange] = useState("https://rickandmortyapi.com/api/character/?page=1")
  // const [form, setForm] = useState("")
  

  useEffect(() => {
    axios
      // .get(`https://rickandmortyapi.com/api/character/`)
      .get(`${change}`)
      .then(response => {
        setCharacter(response.data.results)
        console.log(response.data.info)
        setChange(response.data.info)
        
        // setForm(Object.values(response.data.results.map(props => ({
        //         name: props.name
        // }))));
        
        
        
       
      })
      .catch(error => {
        console.log("Something went wrong!", error.response);
      });
  }, [change]);

                        // Search From Below

    // const onSearch = (name) => {
    //   const formCopy = [...form];
    
    //   const findPerson = formCopy.find(person => person.name === name.name)
    //   Object.assign(findPerson, name);

    // }
                        // Search Form End

  return (

   <section>

      <TabHeading>Characters</TabHeading>
      <ButtonDiv>
              {/* {change.prev.IsNullOrEmpty("") ? 
              <Buttons onClick ={() => setChange(change.next.length-1)}>Previous</Buttons>
              : */}
        <Buttons onClick = {() => setChange(change.prev)}>Previous</Buttons>
            {/* } */}

                      {/* Below is for SearchForm */}
            {/* <Route path ="/character/:name" render = {props => {
              return <SearchForm {...props} onSearch = {onSearch}  />
            }} /> */}
        <Buttons onClick = {() => setChange(change.next)}>Next</Buttons>
      </ButtonDiv>

      <div className='character-list grid-view'>
        {Object.values(character).map(props => {
          // console.log(props)
          return (  <CharacterCard props = {props}  key = {props.id} />
          )
        })}
      </div>
  </section>
    )

}
