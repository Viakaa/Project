import React, {useEffect, useRef} from 'react'
import Background from '../../assets/background/snowing.gif'
import SnowingAudio from '../../assets/sounds/howling-winter-storm-ambient-sounds-6756.mp3'
import Play from '../../components/play/play';
import '../pages.css'

function Snowing() {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
  };

  useEffect(() => {
    const audio = new Audio(SnowingAudio);
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

export default Snowing;
