import React, {useRef} from 'react';
import './App.css';
import MainPage from './components/mainPage/page';
import OldTown from './components/pages/oldTown';
import Fotografisk from './components/pages/fotografiska';
import SergelsTorg from './components/pages/sergelsTorg';
import Quote from './components/pages/quote';
import RoyalePalace from './components/pages/royaleRoyale';
import Skansen from './components/pages/skansen';
import CityHall from './components/pages/cityHall';
import Restaurants from './components/pages/restaurants';

function App() {
  
  return (
    <div className="App">
      <MainPage/>
      <OldTown/>
      <SergelsTorg/>
      <Quote/>
      <RoyalePalace/>
      <Fotografisk/>
      <Skansen/>
      <CityHall/>
      <Restaurants/>
    </div>
  );
}

export default App;
