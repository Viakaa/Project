import React, { useEffect, useRef } from 'react';
import Background from '../../assets/background/evening.gif';
import '../pages.css';
import EveningAudio from '../../assets/sounds/cicadas_crickets_night-19433.mp3';
import Play from '../../components/play/play';

function Evening() {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
  };

  useEffect(() => {
    const audio = new Audio(EveningAudio);
    audioRef.current = audio;

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <div>
      <div className='background' style={{ backgroundImage: `url(${Background})` }}>
        <Play playAudio={playAudio} />
      </div>
    </div>
  );
}

export default Evening;
