import React, { useState , useRef, useEffect} from 'react';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import { Github, Window, Telephone, } from 'react-bootstrap-icons';
import naviDB from '../json/navidb.json'


function Navi(props) {
  const targetRef = useRef(null); 
  const[ naviText, updateText ] = useState(true);
  //json -> map
  const naviDBfile = naviDB.naviDATA 

  const handleScroll = () => {
    if (window.scrollY > 100) {
      targetRef.current.classList.add('scroll');          
    }else{
      targetRef.current.classList.remove('scroll')
    }
   
  };

  useEffect(() => {   
    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
     
    }, 100);    
    return () => {
      clearInterval(timer); 
      window.removeEventListener("scroll", handleScroll); 
      
    };
  }, []); 

  return (
    <div className={`${navicss.hd}  py-2 fixed-top`}>
      <header id="hd" ref={targetRef} className="p-2 d-lg-flex justify-content-between align-items-center">
        {/* continer와 row 를 같이 쓰면 row가 강하다.  */}
        <h1>
          <Link to="/">
            <img src='img/logo_green.png' />
          </Link>
        </h1>

        <Scrollspy id="gnb" className="d-flex">
          {
            naviDBfile.map(( item, idx) => {
              const myclass = item.d1.cls.join(" ");
              if(item.d1.type){
                return (
                  <li key={ 'navi'+idx } className={myclass}>
                  <a href={item.d1.href} >
                  {item.d1.naviText}
                  </a>
                  </li>
                )
            }else{
              return (
                <li key={ 'navi'+idx } className={myclass}>
                <Link to={item.d1.href} >
                {item.d1.naviText}
                </Link>
                </li>
              )
          }
      })}
        </Scrollspy>

        <Scrollspy id="sns" className='d-flex'>
            <li className='px-2'><a href="#"><Github /></a></li>
            <li className='px-2'><a href="#"><Window /></a></li>
            <li className='px-2'><a href="#"><Telephone /></a></li>
        </Scrollspy>

  
        
      </header>
    </div>
  )

}

export default Navi;