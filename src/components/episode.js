import {React, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import './episode.css'
import logo from '../images/burger.png';
import Navbar from './navbar';

export default function Episode(){
    const { name } = useParams();
    const [episodeInfo, setEpisodeInfo] = useState({})


    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/episodes/${name}`)
        .then(res => res.json())
        .then(res => setEpisodeInfo(res))
    }, [name])

    console.log(episodeInfo)
    return(
        <div>
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />
            <div id="episode-info">
                <h2>{episodeInfo.name}</h2>
            </div>
            
        </div>
    )
}