import React from 'react'
import './Quiz.css';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Intro=()=>{
    const navigate=useNavigate();
return(<>
             <div className='first'>
            <h1 className="sec">Hey Folks!</h1>
            <img  src='./images/hello.jpg' alt=""/>
            </div>
        <div className="container">
            <h1>Please Note:-</h1>
            <hr/>
            <ul>
                <li>This is a Quiz app consist of 2 Sections
                   
                </li>
                <li>Section A:Logical Reasoning - Consist of 5 Questions</li>
                <li>Section B: Technical -  Consist of 10 Questions</li>
                <li>Once You click on the Next button you will be directed to next question </li>
                <li>You cannot move to previous question</li>
                
            </ul>
            <div className='best'>
            <h2>All the best!</h2>
            </div>
            
                <button on onClick={()=>navigate("/seca")} >Start</button>
            
            </div>
            
        </>);
        }
        export default Intro;