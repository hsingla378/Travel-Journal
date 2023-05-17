import React from "react"; 
import "../index.css"
let globeImg = require ("../images/globe.png")

export default function Navbar(){
    return (
        <nav>
            <img src={globeImg} alt="logo"/>
            <p>My Travel Journal</p>
        </nav>
    )
}