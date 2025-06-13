import React from "react"
import { useState } from 'react';
import "./search.css"
function Search() { const [input, setInput] = useState("");return (<div className="cont"><input onChange = {(e)=> {setInput(e.target.value)}}id = "search" placeholder="search a movie"></input><button id="searchBtn">search</button></div>)}

export default Search 