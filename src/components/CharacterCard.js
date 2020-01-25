import React from "react";
import {Link} from "react-router-dom"
export default function CharacterCard(props) {
  return (
  <span>
    <h3>{props.name}</h3>
    <img src={props.image} alt={props.name}/>
    <h4>Episodes in: {props.episode.length}</h4>
  </span>
  )
}
