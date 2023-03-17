import {React, useEffect, useState } from 'react';



export default function Burger(){
    const [burger, setBurger] = useState({})

//Chooses a random number
    let randomBurger = Math.floor(Math.random() * 333);

//Calls the API to get a random burger of the day. I had to leave the dependency array empty because when I added randomBurger to it, it called endlessly.
    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${randomBurger}`)
        .then(res => res.json())
        .then(res => setBurger(res))
      }, [])

//Renders the Burger of the Day
    return(
        <div id="burger-of-day">
            <h3> Random Burger of the Day:</h3>
            <p>Season: {burger.season} Episode: {burger.episode}</p>
            <p>{burger.name}</p>
            <p>{burger.price}</p>
        </div>
    )
}