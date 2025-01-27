import React from "react";
import '../styles/Home.css'
import '../content/HomeContent.js'
import { homeContent } from "../content/HomeContent.js";

function Home() {
    return (
    <div id="home" className="section">
        <img className='backgroundPhoto' src="../../images/forrest.jpeg" alt="forrestphoto"></img>
        <p className="homeText">{homeContent.text}</p>
    </div>
    );
}

export default Home;