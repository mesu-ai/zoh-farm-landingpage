import React from 'react';
import banner from '../../assets/images/banner.png';
import './Banner.scss';
import '../../styles/responsive.scss';

const Banner = () => {
  return (
    <div id='banner'>
      <div  className='banner-container' >
      <div className='container banner-description'
       >
        <h4 className='banner-title'>A New Way to Invest in Agriculture </h4>
        <p className='banner-text'>
          Zou provides farmes, ranchers, private foresters, and agricultural
          producers with online self service applications and educational
          materials.
        </p>
        <button className='invest-btn'>Invest Now</button>
      </div>
      <img
        // style={{ position: 'absolute', top: 0, right: 0, width: '50vw' }}
        style={{width:'50vw',position: 'absolute', top: 0, right: 0,}}
        src={banner}
        alt=''
      />
    </div>

    </div>
    
  );
};

export default Banner;
