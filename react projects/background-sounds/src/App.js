import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Night from './pages/night/night'
import Sea from './pages/sea/sea';
import Evening from './pages/evening/evening';
import Snowing from './pages/snowing/snowing';
import Wind from './pages/wind/wind';
import Train from './pages/train/train';
import Thunderstorm from './pages/thunderstorm/thunderstorm';
import Rain from './pages/rain/rain';
import Summer from './pages/summer/summer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';


function App() {
 
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/night" element={<Navbar ><Night /></Navbar>} />
        <Route path="/sea" element={<Navbar><Sea /> </Navbar>}/>
        <Route path="/evening" element={<Navbar><Evening /></Navbar>} />
        <Route path="/snowing" element={<Navbar><Snowing /></Navbar>} />
        <Route path="/wind" element={<Navbar><Wind /> </Navbar>} />
        <Route path="/train" element={<Navbar><Train /> </Navbar>} />
        <Route path="/storm" element={<Navbar><Thunderstorm/></Navbar>} />
        <Route path="/rain" element={<Navbar><Rain /></Navbar>} />
        <Route path="/summer" element={<Navbar><Summer /></Navbar>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
