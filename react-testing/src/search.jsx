import React from "react"
import { useState } from 'react';
import "./search.css"
function Search() { const [input, setInput] = useState(""); async function Api() { const apiKey="32bcfa90"  ;const url =`http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`; 
try {const response = await fetch(url)
const res =  await response.json()
if(!response.ok) {window.alert("not Found")}
console.log(res.Search) }
catch(error) {window.alert("not working");  console.error(error);}


}; return (<div className="cont"><input onChange = {(e)=> {setInput(e.target.value)}}id = "search" placeholder="search a movie"></input><button id="searchBtn" onClick = {()=> {Api()}}>search</button></div>)}

export default Search 