import React, { useState, useEffect } from "react"


const SinglePuppy = (props) => {
    const allDogs = props.puppyData
    const specificDog = props.whichPuppy


let url
allDogs.map((dog) => {url = "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/"+ `${dog.id}`})
   
       

// THIS ENTIRE COMPONENT/PAGE MAY NOT BE NEEDED

 





}

export default SinglePuppy
