import React from 'react';
import farmer from '../../assets/images/farmer.svg';
import group from '../../assets/images/group.svg';
import invest from '../../assets/images/invest.svg';

import './styles.scss';
// import '../../styles/responsive.scss';

const opportunitiesDate = [
  {
    id: 1,
    image: farmer,
    title: 'Connect with our farmers',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione',
  },
  {
    id: 2,
    image: group,
    title: 'Grow your business',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  },
  {
    id: 2,
    image: invest,
    title: 'Social Impact Invesment',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ',
  },
];

const Opportunities = () => {
  return (
    <div
      id='opportunity'
      className='container'
    >
      <div className='oppopportunity-container'>
        <p className='oppopportunity-title'>New Opportunities</p>
        <p>
          We are the first and the only crowdfunding platform enabling you to
          help finance our farmers.
        </p>
        <div className='opp-card-container'>
          {opportunitiesDate.map((item) => (
            <div
              key={item?.id}
              className='opp-card'
            >
              <img
                height='40'
                width='70'
                src={item?.image}
                alt='icon'
              />
              <h6 className='opp-card-title'>{item.title}</h6>
              <p className='opp-card-text'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ paddingRight: '60px', paddingLeft: '60px' }}>
        <hr
          style={{
            marginTop: '60px',
            background: '#F7F7F7',
            border: '1px solid #F7F7F7',
          }}
        />
      </div>
    </div>
  );
};

export default Opportunities;
