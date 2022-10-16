import React, {useState, useEffect} from "react";
import Navbar from "./Navbar"
import AllPuppies from "./AllPuppies";
import Searchbar from "./DogSearchBar";
import DogSearchbar from "./DogSearchBar";
import SinglePuppy from "./SinglePuppy";

const Main = () => {
  const [puppyData, setPuppyData] = useState([]);

  const [searchPuppies, setSearchPuppies] = useState(''); 

  useEffect (() => {
    async function getPuppyData() {
      const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players")
      const result = await response.json()
      const puppies = result.data.players
      setPuppyData(puppies)
    }
    getPuppyData()
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
    <AllPuppies puppyData={filterPuppyData()}/>
    <SinglePuppy puppyData={puppyData}/>
    </div>
  </div>)
};

export default Main;
