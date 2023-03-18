import {React, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import './characters.css';
import logo from '../images/burger.png';
import Navbar from './navbar';
import Burger from './burger'


export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')


//Calls the API to get a list of characters
    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/')
        .then(res => res.json())
        .then(res => setCharacters(res))
        .catch(err => console.log(err))
    }, [])

//Maps through the characters and renders their image and name in a clickable link
    const characterList = characters?.map(character => <div id="character-cards" key={character.id}>
        <Link to={`/character/${character.id}`}>
        <img src={character.image} alt="character" id="character-images"/>
        <p>{character.name}</p>
        </Link>
    </div>)

//Filters and maps through the list of characters based on user search
    const filteredCharacterList = characters?.filter(c => c.name.toLowerCase()?.includes(search) || '').map(character => <div id="character-cards" key={character.id}>
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
            <h3>Search for your favorite character!</h3>
            <input type="text" value={search} onChange={e => setSearch(e.target.value.toLowerCase())}/>
            <h2>Characters:</h2>
            <div id="characters-section">
                {search === '' ? characterList : filteredCharacterList}
            </div>
    </div>
        
    )
}