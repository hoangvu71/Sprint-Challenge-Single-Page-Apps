import React, {useState} from "react";
import SearchForm from "./SearchForm"
import CharacterList from "./CharacterList";
import { Route } from "react-router-dom";

export default function WelcomePage() {
  const [search, setSearch] = useState("")

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
      <Route exact path="/">
        <SearchForm search={search} setSearch={setSearch}/>
        <CharacterList search={search} />
      </Route>
      
    </section>
  );
}
