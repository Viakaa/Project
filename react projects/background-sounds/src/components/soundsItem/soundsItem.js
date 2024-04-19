import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SoundsItem({image, name }) {
  const [isClicked, setIsClicked] = useState(false);
  

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Link to={`/${name.toLowerCase()}`} className={`soundsItem ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p>{name}</p>
    </Link>
  );
}

export default SoundsItem;
