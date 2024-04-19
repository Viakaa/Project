import React, {useEffect, useRef} from 'react'
import Background from '../../assets/background/rain.gif'
import RainAudio from '../../assets/sounds/light-rain-ambient-114354.mp3'
import Play from '../../components/play/play';
import '../pages.css'

function Rain() {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
  };

  useEffect(() => {
    const audio = new Audio(RainAudio);
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

export default Rain;
