import {React, useEffect, useState } from 'react';



export default function Burger(){
    const [burger, setBurger] = useState({})

    let randomBurger = Math.floor(Math.random() * 333);

    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${randomBurger}`)
        .then(res => res.json())
        .then(res => setBurger(res))
      }, [])


    return(
        <div id="burger-of-day">
            <h3> Random Burger of the Day:</h3>
            <p>Season: {burger.season} Episode: {burger.episode}</p>
            <p>{burger.name}</p>
            <p>{burger.price}</p>
        </div>
    )
}