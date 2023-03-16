import { React } from 'react';
import './home.css';
import  banner from '../images/family-closeup.jpg';
import logo from '../images/burger.png';
import Navbar from './navbar';

function Home() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="burger"/>
        <h1>Bob's Burgerpedia</h1>
      </header>
      <Navbar />
      <img id="banner" src={banner} alt="banner" />
      
    </div>
  );
}

export default Home;

