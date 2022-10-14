import React, { useState } from "react";

const DogSearchbar = (props) => {

  return (
    <form id="SearchBar"onSubmit={(e)=>{e.preventDefault();props.setSearchPuppies(e.target[0].value)}}>
      <label>
        Name
        <input 
        type="search" 
        placeholder="Type the dog's name..."
         />
      </label>

    </form>)
};

export default DogSearchbar;
