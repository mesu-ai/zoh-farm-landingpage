import React from 'react';
import Banner from '../../components/molecules/Banner';
import Convenience from '../../components/molecules/Convenience';
import HowToWork from '../../components/molecules/HowToWork';
import Opportunities from '../../components/molecules/Opportunities';

const Home = () => {
  return (
    <div style={{}}>
      <Banner/> 
      <Opportunities/>
      <Convenience/>
      <HowToWork/>
    </div>
  );
};

export default Home;