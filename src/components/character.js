import {React, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';

import './character.css';
import logo from '../images/burger.png';
import Navbar from './navbar';

export default function Character(){
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
        .then(res => res.json())
        .then(res => setCharacter(res))
    }, [id])


    return(
        <div>
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />
            <div id="character-page">
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name}/>
                <div id="character-info">
                    <p>{character.gender}</p>
                </div>
            </div>
        </div>
    )
}