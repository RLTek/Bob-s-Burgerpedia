import {React, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import './characters.css';
import logo from '../images/burger.png';
import Navbar from './navbar';
import Burger from './burger'


export default function Characters() {
    const [characters, setCharacters] = useState([])


//Calls the API to get a list of characters
    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/')
        .then(res => res.json())
        .then(res => setCharacters(res))
    }, [])

//Maps through the characters and renders their image and name in a clickable link
    const characterList = characters?.map(character => <div id="character-cards" key={character.id}>
        <Link to={`/character/${character.id}`}>
        <img src={character.image} alt="character" id="character-images"/>
        <p>{character.name}</p>
        </Link>
    </div>)

//renders the Character page
    return(
    <div id="characters-page">
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />
            <Burger />
            <h2>Characters:</h2>
            <div id="characters-section">
                {characterList}
            </div>
    </div>
        
    )
}