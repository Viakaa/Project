import React, { forwardRef } from 'react';
import './information.css';

const Information = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='information'>
      <div className='littleTaylor'></div>
      <div className='infoContainer'>
        <h1> Taylor Alison Swift </h1>
        <p>(born December 13, 1989) is an American singer-songwriter. 
          Her songwriting, artistry, and entrepreneurship have vastly 
          influenced the music industry and popular culture, and her life is 
          a subject of widespread media coverage.</p>
        <div className='readMore'>Read more</div>
      </div>
    </div>
  );
});

export default Information;