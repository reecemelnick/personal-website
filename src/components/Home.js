import React from "react";
import '../styles/Home.css'

function Home() {
    return (
    <div id="home" className="section">
        <img className='backgroundPhoto' src="../../images/forrest.jpeg" alt="description of image"></img>
        <p className="homeText">Hi, im Reece Melnick. Im a software developer from Port Alberni, BC</p>
    </div>
    );
}

export default Home;