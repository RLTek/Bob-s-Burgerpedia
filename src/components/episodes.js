 import {React, useEffect, useState } from 'react';
 import {Link} from 'react-router-dom';

import './episodes.css';
import logo from '../images/burger.png';
import Navbar from './navbar';


export default function Episodes(){
const [episodes, setEpisodes] = useState([]);
const [season, setSeason] = useState('all');

useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/episodes')
    .then(res => res.json())
    .then(res => setEpisodes(res))
}, [])


const episodeList = episodes?.map(episode => <div key={episode.id}>
    <Link to="/episode"><p>{episode.name}</p></Link>
</div>)

const seasonList = episodes?.map(j => 
    j.season.toString() === season ? <div key={j.id} id="season-list"><Link to="/episode"><p>{j.name}</p></Link></div> : ""
)

    return(
        <div id="episodes">
            <header>
                <img src={logo} alt="burger"/>
                <h1>Bob's Burgerpedia</h1>
            </header>
            <Navbar />
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
                <option>13</option>
            </select>
            <div id="episode-list">
                {season === "all" ? episodeList : seasonList}
            </div>
        </div>
    )
}