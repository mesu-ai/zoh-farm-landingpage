import React from 'react';
import con1 from '../../assets/images/convience1.png';
import con2 from '../../assets/images/convience2.png';

const convienceDatas = [
  {
    id: 1,
    photo: con1,
    highlightTitle: 'NEW FARM TODAY',
    title: 'Short terms investment',
    shordescription:
      'Invest in farms that will be ready for harvest in 3-18 months',
    buttonTitle: 'Browse Farm',
  },
  {
    id: 2,
    photo: con2,
    highlightTitle: 'FULLY FUNDED',
    title: 'Long terms investment',
    shordescription: 'Consider farms that have long term investment program.',
    buttonTitle: 'Learn more',
  },
];

const Convenience = () => {
  return (
    <div
      id='convenience'
      className='container'
    >
      <div>
        <p className='convenience-title'>Invest on your convenience</p>
        <p>
          Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur
        </p>
      </div>
      <div className='convenience-card-container'>
      {convienceDatas.map((item) => (
        <div key={item.id} className='convenience-card'>
          <img
          style={{width:'100%'}}
            src={item?.photo}
            alt=''
          />
          <div className='convenience-info'>
            <p className='con-h-title'>{item.highlightTitle}</p>
            <p style={{width:'50px'}}>
              <hr/>
            </p>
            <p className='con-title'>{item.title}</p>
            <p className='con-s-des'>{item.shordescription}</p>
            <button className='con-button'>{item.buttonTitle}</button>
          </div>
        </div>

      ))}

      </div>
      
    </div>
  );
};

export default Convenience;
