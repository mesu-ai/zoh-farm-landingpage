import React from 'react';
import Banner from '../../components/molecules/Banner';
import Convenience from '../../components/molecules/Convenience';
import Opportunities from '../../components/molecules/Opportunities';

const Home = () => {
  return (
    <div style={{}}>
      <Banner/> 
      <Opportunities/>
      <Convenience/>
    </div>
  );
};

export default Home;