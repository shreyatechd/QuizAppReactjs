import React from "react";
import './Quiz.css';
import './index.css';
const Quiz4=()=>{
    return(
    <div className="container">
        <h1>Section A</h1>
        <hr/>
        <h2>4. Which device is used for Connection</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>PenDrive</li>

        </ul>
        <button>Next</button>
        <div className="index">1 of 5 Questions</div>
       
    </div>);
}
export default Quiz4;