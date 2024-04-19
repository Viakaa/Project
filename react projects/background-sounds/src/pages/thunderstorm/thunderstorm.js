import React, {useEffect, useRef} from 'react'
import Background from '../../assets/background/thunderstorm.gif'
import StormAudio from '../../assets/sounds/approaching-thunderstorm-in-small-town-sound-effect-6806.mp3'
import Play from '../../components/play/play';
import '../pages.css'

function Thunderstorm() {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.play();
    }
  };

  useEffect(() => {
    const audio = new Audio(StormAudio);
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
export default Thunderstorm