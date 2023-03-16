import {React, useEffect, useState } from 'react';
import {useParams, Link } from 'react-router-dom';

import './episode.css'
import logo from '../images/burger.png';
import Navbar from './navbar';
import Burger from './burger';

export default function Episode(){
    const { id } = useParams();
    const [episodeInfo, setEpisodeInfo] = useState({})
    const [storeNextDoor, setStoreNextDoor] = useState({})
    const [pestControl, setPestControl] = useState({})
   


    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/episodes/${id}`)
        .then(res => res.json())
        .then(res => setEpisodeInfo(res))
    }, [id])

    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/storeNextDoor/${id}`)
        .then(i => i.json())
        .then(i => setStoreNextDoor(i))
    }, [id])

    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/pestControlTruck/${id}`)
        .then(j => j.json())
        .then(j => setPestControl(j))
    }, [id])

   

    
    return(
        <div>
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />

            <Burger />
            <div id="episode-info">
                <h2>{episodeInfo.name}</h2>
                <p>Season: {episodeInfo.season} Episode: {episodeInfo.episode}</p>
                <p>Air Date: {episodeInfo.airDate}</p>
                <p>Total Viewers: {episodeInfo.totalViewers}</p>
                <Link to={episodeInfo.episodeUrl} target="_blank"><p>Read about this episode!</p></Link>
            
    
                <div id="pictures">
                    <div id="next-door-section">
                        <p>The Store Next Door:</p>
                        <img src={storeNextDoor.image} alt="store next door" id="next-door"/>
                    </div>
                    <div id="pest-control-section">
                        <p>Pest Control Truck: {pestControl.name}</p>
                        <img src={pestControl.image} alt="pest control" id="pest-control"/>
                        
                    </div>
                </div>
           </div>
            
        </div>
    )
}