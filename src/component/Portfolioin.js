import React from 'react';
import portfolio from '../json/portfolio.json';

function Portfolioin(props) {
  return (
    <div>
      <h2 className='text-uppercase text-center'>{portfolio[props.portfolioid].title}
      </h2>
      <p className='text-center'>
        {portfolio[props.portfolioid].title}
      </p>
      <ul >
        <li>
          
        </li>
      </ul>
    </div>
  );
}

export default Portfolioin;