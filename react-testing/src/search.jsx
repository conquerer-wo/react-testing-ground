import React, { useState } from "react";
import "./search.css";
import Body from './Body.jsx';
function Search() {
  const [input, setInput] = useState("");
  const [resa, setResa] = useState();

  async function Api() { // use a loop to access a maxium of 10 object sin teh array//
    const apiKey = "32bcfa90";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${input}`;

    try {
      const response = await fetch(url);
      const res = await response.json();


      if (!response.ok) {
        return(<p>ts NOT valid</p>)
      }
      if(res.Response !== "True") {window.alert("Your search doesnt exist")}
      console.log(res);
      console.log(res.Search);
      setResa(res.Search)
      
      
    } catch (error) {
      window.alert("Not working");
      console.error(error);
    }
  }
        
  return (
    <><div className="cont">
      <input
        id="search"
        placeholder="search a movie"
        
        onChange={(e) => setInput(e.target.value)}
       
      />
      <button id="searchBtn" onClick={() => Api()}>
        search
      </button>
    </div>
    <Body value = {resa}/>
    </>
  );
}

export default Search;

