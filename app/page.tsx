"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page() {
  return <div>
    <CountButton name={"Add One"} mult={1} size={0.5}/>
    <CountButton name={"Add Three"} mult={3} size={2}/>
    <hr/>
    <p style={{textAlign:"center", fontSize:"1.2rem"}}><a href="https://github.com/coopersenior/NextJS">My GitHub Repo</a></p>
    <hr/>
    <SearchBar/>
  </div>

  
}