import React, {useEffect} from "react"

const GrabPuppy = (props) => {
    const specificDog = props.whichPuppy
    const justOneDog = props.justOneDog


    useEffect(() => {
        async function getPuppies() {
            const response = await fetch(justOneDog)
            const result = await response.json()
            const puppy = result.data.player
            setPups(puppy)      
        }
        getPuppies()
    
    }, [])


}











export default GrabPuppy