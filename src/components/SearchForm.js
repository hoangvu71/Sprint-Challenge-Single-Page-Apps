import React, { useState } from "react";
import {SearchStyle} from "./Style"

export default function SearchForm(props) {
  const [changeTemp, setChangeTemp] = useState("")
  const changeHandler = event => {
    setChangeTemp(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault();
    props.setSearch(changeTemp);
  }


  return (
    <section className="search-form">
    <form onSubmit={(event) => submitHandler(event)}>
      <SearchStyle>
        <label>
          <input onChange={(event) => changeHandler(event)} type="text"/>
      </label>
      <button type="submit">Submit</button>
      </SearchStyle>
      
    </form>
    </section>
  );
}
