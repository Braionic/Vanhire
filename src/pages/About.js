import React from 'react'
import Header from '../components/Header';
import logo from '../images/image55.png';
export default function About() {
  return (
    <div className="App">
      <Header />
        <img className="logo" src={logo} />
        <section>
        <h2 className="title">Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p className="our-mission">Our mission is to enliven your road trip with the 
        perfect travel van rental. Our vans are recertified before each trip to ensure your 
        travel plans can go off without a hitch. (Hitch costs extra 😉) </p>
        <p className="our-mission">Our team is full of vanlife
           enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
           <div className="hero">
            <div className="hero-text">
            <h2>Your destination is awaiting your van</h2>
            <h2>Your van is ready</h2>
            </div>
            <button className="hero-button">
              Explore our vans
            </button>
           </div>
        </section>
        <div className="footer">2023 Footer</div>
    </div>
  )
}