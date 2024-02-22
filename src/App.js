import React from 'react';

import './Quiz.css';
import './index.css';
import Quiz1 from './Quiz1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Quiz from './Quiz';
import Intro from './Intro';
import Thanku from './Thanku';

function App() {
   return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/seca" element={<Quiz/>}/>
        <Route path="/secb" element={<Quiz1/>}/>
        <Route path="/last" element={<Thanku/>}/>

    </Routes>
    </BrowserRouter>
   )

}
export default App;
