import React from "react";

const DogSearchBar = (props) => {
//imported setSearchPuppies as prop to update state on main?
const setSearchPuppies = props.setSearchPuppies

  return (
    //on form submit, set the searchPuppy state in main to string contained in form
    <div id="searchBarContainer">
      <form id="SearchBar" onSubmit={(e)=>{
        e.preventDefault();
        setSearchPuppies(
          e.target[0].value
          )}}>
        <label>
            Name: 
            <input 
            type="search" 
            placeholder="Type a dog's name..."
            />
        </label>
      </form>
      </div>)
};

export default DogSearchBar;
