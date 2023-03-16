import { React } from 'react';
import './home.css';
import  banner from '../images/family-closeup.jpg';
import logo from '../images/burger.png';
import Navbar from './navbar';
import Burger from './burger';


function Home() {


  return (
    <div className="App">
      <header>
        <img src={logo} alt="burger" id="burger"/>
        <h1>Bob's Burgerpedia</h1>
      </header>
      <Navbar />
      <img id="banner" src={banner} alt="banner" />
      <div id="home-page">
        <h2>Welcome to Bob's BurgerPedia!</h2>
        <p>Information on all of your favorite Bob's Burgers episodes, characters and more!</p>
      </div>
      <Burger />
      
    </div>
  );
}

export default Home;

