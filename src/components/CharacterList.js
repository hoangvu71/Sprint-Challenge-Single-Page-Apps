import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard";
import {ImageWrapper} from "./Style"
export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${props.search}`)
      .then(res => {
        console.log(res)
        setChar(res.data.results)
      })
      .catch(err => {
        console.log("Error encountered!", err)
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.search]);

  return (
    <section className="character-list">
      {console.log(char)}
      <ImageWrapper>
        {char.map(ele => <CharacterCard episode={ele.episode} name={ele.name} image={ele.image} key={ele.id}/>)}
      </ImageWrapper>
    </section>
  );
}
