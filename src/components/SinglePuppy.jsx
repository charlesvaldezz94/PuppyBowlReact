import React, { useState, useEffect } from "react"

// This is a work in progress.  I was able to get the function to fetch from the database a single player, but i had to manually input that player's id into the url. I am not sure how to get it to be dynamic or get it attached to the details button.  I passed down the prop puppyData from Main and I exported from default in the index.js file, but have not imported it anywhere else.  The url that is currently in there is pulling the dog Jack's information currently, but needs to be dynamic.  I found that you can assign the button on the AllPuppies page an id of {puppy.id}.  I was thinking that may be useful as to correlating which button is pressed to retrieve which dog's data?  I don't know.  I left the console.log in so we can see that it is actually fetching Jack's information only.



const SinglePuppy = (props) => {
    const allDogs = props.puppyData

    const [pups, setPups] = useState({})

    return (

      useEffect(() => {
        async function getPuppies() {
            const response = await fetch(
                "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/7441"
            )
            const result = await response.json()
            const puppy = result.data.player
            setPups(puppy)  
            console.log(puppy)         
        }
        getPuppies()
    }, []))
}

export default SinglePuppy