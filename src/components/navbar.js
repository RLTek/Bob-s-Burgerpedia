import {React} from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';

export default function Navbar(){

//Renders the navbar
    return(
        <nav id="navbar">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/episodes'><li>Episodes</li></Link>
                <Link to='/characters'><li>Characters</li></Link>
            </ul>
        </nav>
    )
}