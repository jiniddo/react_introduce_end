import React, { useState } from 'react';
import Portfolioin from './Portfolioin.js'

function Portfolio(props) {
  const [ worknm, worknmupdate ] = useState(['리액트','reactid']);
  const btnupdate = (e) => {
    const newworknm = e.target.getAttribute('datasrc').split(' , ');

    // console.log(newworknm, typeof newworknm)
    worknmupdate(newworknm);

  }
  return (
    <div>

      <div className='d-flex justify-content-center'>
        <button onClick={ btnupdate } datasrc={['리액트','reactid']}>PWA 리액트</button>
        <button onClick={ btnupdate } datasrc={['EC 쇼핑몰','ecid']}>EC 쇼핑몰</button>
        <button onClick={ btnupdate } datasrc={['CMS 그누보드','cmsid']}>CMS 그누보드</button>
        <button onClick={ btnupdate } datasrc={['Design 피그마','figmaid']}>Design 피그마</button>
      </div>
      <Portfolioin dbobjkey={worknm[0]} portfolioid={worknm[1]}></Portfolioin>

    </div>
  );
}

export default Portfolio;