import React, {useState} from "react";
import SearchForm from "./SearchForm"
import CharacterList from "./CharacterList";
import { Route, Link } from "react-router-dom";
import Episodes from "./Episodes";

export default function WelcomePage() {
  const [search, setSearch] = useState("")

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
      <Route exact path="/">
        <SearchForm search={search} setSearch={setSearch}/>
        <Link to="/episodes">Episode List</Link>
        <CharacterList search={search} />
      </Route>
      
      <Route path="/episodes">
        <Episodes />
      </Route>
      
    </section>
  );
}
