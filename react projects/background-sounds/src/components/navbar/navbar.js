import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SoundsList } from "../soundsList/soundsList";
import SoundsItem from "../../components/soundsItem/soundsItem";
import "./navbar.css";

function Navbar({ handleVolumeChange, initialVolume, children }) {
  const [openLinks, setOpenLinks] = useState(false);
  const [showVolumeBar, setShowVolumeBar] = useState(false);
  const [timer, setTimer] = useState(20 * 60); 
  const [breakTime, setBreakTime] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const toggleVolumeBar = () => {
    setShowVolumeBar(!showVolumeBar);
  };

  const handleTimerToggle = () => {
    if (!timerRunning) {
      setTimerRunning(true);
    } else {
      setTimerRunning(false);
    }
  };

  useEffect(() => {
    let interval;
  
    if (timerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); 
    } else if (timerRunning) {
      setBreakTime((prevBreakTime) => !prevBreakTime);
      setTimer(breakTime ? 20 * 60 : 5 * 60);
    }
  
    return () => clearInterval(interval);
  }, [timer, timerRunning, breakTime]);
  
  return (
    <>
    <div className="navbar">
      <div className="leftSide">
        <button className="menu" onClick={toggleNavbar}>
          <img />
          {openLinks && (
        <div className="sounds List">
          {SoundsList.map((soundsItem, key) => (
            <SoundsItem
              key={key}
              image={soundsItem.image}
              name={soundsItem.name}
            />
          ))}
        </div>
      )}
        </button>
        <Link to="/" className="homeButton">
          Home
        </Link>
      </div>
      <div className="timer">
            <button className="timerIcon" onClick={toggleTimer}>
              <img />
            </button>
            {showTimer && (
            <div className="timerContainer">
              {breakTime ? (
                <div>
                  <p>Break Time</p>
                </div>
              ) : (
                <div>
                  <p>Study Time</p>
                </div>
              )}
              <div>
                <p>
                  {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
                  {timer % 60}
                </p>
              </div>
              <button className="startPauseButton" onClick={handleTimerToggle}>
                {timerRunning ? "Pause Timer" : "Start Timer"}
              </button>
            </div>
          )}
        </div>
        
      <div className="rightSide">
        <button className="volumeIcon" onClick={toggleVolumeBar}>
          <img />
        </button>
        {showVolumeBar && (
        <div className="volumeControl">
          <input
            type="range"
            id="volume"
            value={initialVolume}
            onChange={handleVolumeChange}
            min="0"
            max="100"
            />
        </div>
      )}
      </div>
    </div>
    {children }
    </>
  );
}

export default Navbar;