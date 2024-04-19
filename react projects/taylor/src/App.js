import React, { useRef } from 'react';
import './App.css';
import MainPage from './components/mainPage/mainPage';
import Navbar from './components/navbar/navbar';
import Information from './components/information/information';
import Songs from './components/songs/songs';
import Events from './components/events/events';
import NewAlbum from './components/newAlbum/newAlbum';
import Bottom from './components/footer/footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);

  const scrolltoHome = () =>{
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEvents = () => {
    eventsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className='buttons'>
        <div onClick={scrolltoHome}>Home</div>
        <div onClick={scrollToAbout}>About</div>
        <div onClick={scrollToEvents}>Events</div>
      </div>
      <Navbar />
      <MainPage ref={homeRef}/>
      <Information ref={aboutRef} />
      <Songs/>
      <Events ref={eventsRef}/>
      <NewAlbum/>
      <Bottom/>
    </div>
  );
}

export default App;