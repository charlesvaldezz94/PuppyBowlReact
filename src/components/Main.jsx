import React, {useState, useEffect} from "react";
import Navbar from "./Navbar"
import AllPuppies from "./AllPuppies";
import Searchbar from "./DogSearchBar";
import DogSearchbar from "./DogSearchBar";
import SinglePuppy from "./SinglePuppy";
import GrabPuppy from './GrabPuppy'

const Main = () => {
  const [puppyData, setPuppyData] = useState([]);
  const [searchPuppies, setSearchPuppies] = useState('');

// The part below is still a work in progress..just trying different things.
  const [pups, setPups] = useState({});
  let specificDog
  const whichPuppy = puppyData.map((dog) => {specificDog = "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/" + `${dog.id}`} )
  const justOneDog = specificDog
// console.log(justOneDog)
// This is where the work in progress ends 

  useEffect (() => {
    async function getPuppyData() {
      const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players")
      const result = await response.json()
      const puppies = result.data.players
      setPuppyData(puppies)
    }
    getPuppyData()
  }, [])

  useEffect(() => {
    async function getPuppies() {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/7441")
        const result = await response.json()
        const puppy = result.data.player
        setPups(puppy)      

    }
getPuppies();
}, [])

function filterPuppyData(){
  if (!searchPuppies){
    return puppyData
  }
  else {
    return puppyData.filter((puppy)=>{
      console.log(searchPuppies)
      return puppy.name.toLowerCase() === searchPuppies.toLowerCase()
    })
  }
}

//trying a function here 
function handleDetailsClick(event) {
  console.log("details clicked!")
}

  return (
  <div id="main">
    <div id="container">
    <Navbar />
    <DogSearchbar setSearchPuppies={setSearchPuppies}/>
    <AllPuppies 
    puppyData={filterPuppyData()}
    />
    <SinglePuppy puppyData={puppyData}/>
    <GrabPuppy whichPuppy={whichPuppy}/>
    </div>
  </div>)
};

export default Main;
