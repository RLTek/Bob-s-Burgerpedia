 import {React, useEffect, useState } from 'react';
 import {Link} from 'react-router-dom';

import './episodes.css';
import logo from '../images/burger.png';
import Navbar from './navbar';
import Burger from './burger'


export default function Episodes(){
const [episodes, setEpisodes] = useState([]);
const [season, setSeason] = useState('all');


//Calls the API to get a list of episodes
useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/episodes')
    .then(res => res.json())
    .then(res => setEpisodes(res))
}, [])

//Maps through the episodes and lists each one into a link
const episodeList = episodes?.map(episode => <div key={episode.id}>
    <Link to={`/episode/${episode.id}`}><p>{episode.name}</p></Link>
</div>)


//Maps through and lists episodes by season when a season is selected in the filter
const seasonList = episodes?.map(j => 
    j.season.toString() === season ? <div key={j.id} id="season-list"><Link to={`/episode/${j.id}`}><p>{j.name}</p></Link></div> : ""
)

//Renders the Episodes page
    return(
        <div id="episodes">
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />
            <Burger />
            <p>Filter by Season:</p>
            <select value={season} onChange={e => setSeason(e.target.value)}>
                <option>all</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <div id="episode-list">
                {season === "all" ? episodeList : seasonList}
            </div>
        </div>
    )
}