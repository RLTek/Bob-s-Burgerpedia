import { React } from 'react';
import './home.css';
import  banner from '../images/family-closeup.jpg';
import logo from '../images/burger.png';
import Navbar from './navbar';
import Burger from './burger';



//Renders the Home page
function Home() {


  return (
    <div className="App">
      <header>
        <img src={logo} alt="burger" id="burger"/>
        <h1>Bob's Burgerpedia</h1>
      </header>
      <Navbar />
      <Burger />
      <div id="home-page">
        <h2>Welcome to Bob's Burgerpedia!</h2>
        <p>Information on all of your favorite Bob's Burgers episodes, characters and more!</p>
      </div>
      <img id="banner" src={banner} alt="banner" />
      
      
      
    </div>
  );
}

export default Home;

