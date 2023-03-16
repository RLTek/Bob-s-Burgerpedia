 import {React, useEffect, useState } from 'react';

import './episodes.css';
import logo from '../images/burger.png';
import Navbar from './navbar';


export default function Episodes(){
const [episodes, setEpisodes] = useState([])

useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/episodes')
    .then(res => res.json())
    .then(res => setEpisodes(res))
}, [])

const episodeList = episodes?.map(episode => <div>
    <p>{episode.name}</p>
</div>)

    return(
        <div id="episodes">
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />
            <p>Episodes</p>
            <div id="episode-list">
                {episodeList}
            </div>
        </div>
    )
}