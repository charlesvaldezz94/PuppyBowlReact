import React, { useState } from "react";

const DogSearchbar = (props) => {

  return (
    <div id="searchBarContainer">
    <form id="SearchBar"onSubmit={(e)=>{e.preventDefault();props.setSearchPuppies(e.target[0].value)}}>
      <label>
        Name: 
        <input 
        type="search" 
        placeholder="Type the dog's name..."
         />
      </label>
    </form>
    </div>)
};

export default DogSearchbar;
