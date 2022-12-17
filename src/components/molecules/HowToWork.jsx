import React from 'react';
import howToWorkBg from '../../assets/images/how-to-work-bg.svg';
import './styles.scss';
import '../../styles/responsive.scss';


const HowToWork = () => {
  return (
    <div id='howToWork'>
      <div className='container how-it-work-container'>
        {/* <img
          width='100%'
          src={howToWorkBg}
          alt='how_to_work'
        /> */}

        <div className='how-to-work-info'>
          <h6 className='how-work-title'>How it works</h6>
          <p className='how-work-des'>
            Take your pick from the supply chain and participate in agribusiness
            projects that are backed up not only by Zou, but also by the best
            land, family heritage, innovation and overall superior expertise.
          </p>
          <div className='how-work-stepper'>
            <p className='step-item' style={{background:'white',color:'#66BB6A'}}>01</p>
            <span className='step-connector'></span>
            <p className='step-item'>02</p>
            <span className='step-connector'></span>
            <p className='step-item'>03</p>
            <span className='step-connector'></span>
            <p className='step-item'>04</p>
          </div>
          <div className='how-work-stepper-des'>
            <p className='stepper-des-title'>
              Select your farmshare and complete reservation form.
            </p>
            <p className='stepper-des-description'>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
