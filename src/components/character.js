import {React, useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';

import './character.css';
import logo from '../images/burger.png';
import Navbar from './navbar';
import Burger from './burger'

export default function Character(){
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    

    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
        .then(res => res.json())
        .then(res => setCharacter(res))
        .catch(err => console.log(err))
    }, [id])



   

    const relatives = character.relatives?.map(relative => 
        
        <div key={relative.name}>
    
            <h3>Name: {relative.name}</h3>
            <p>Relationship: {relative.relationship || "Unknown"}</p>       
            
        </div>)

    

    return(
        <div>
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />
            <Burger />
            <div id="character-page">
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} id="character-pic"/>
                <div id="character-info">
                    <p><b>Gender:</b> {character.gender}</p>
                    <p><b>Hair Color:</b> {character.hairColor}</p>
                    <p><b>Occupation:</b> {character.occupation}</p>
                    <p><b>First Episode:</b> {character.firstEpisode}</p>
                    <p><b>Voiced By:</b> {character.voicedBy}</p>
                </div>
                <Link to={character?.wikiUrl} target="_blank"><h3>Read about {character.name}</h3></Link>
                <h2>Relatives:</h2>
                <div id="relatives">
                    {relatives?.length > 0 ? relatives : "None"}
                </div>
            </div>
        </div>
    )
}