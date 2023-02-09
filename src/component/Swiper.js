// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "../css/swiper.css"
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

function MainSwiper(props) {
      let swiperdb = [
        { title : ["자기소개서", "작은설명"],
          cls : ["react", "reactbg"],
          href : "pindrop.cafe24.com/introduce",
          bg : "red"
        },
      
        { title : ["다양한 애니메이션 클론코딩", ""],
          cls : ["cloneCoding", "clonebg"],
          href : "pindrop.cafe24.com/familyisland",
          bg : "yellow"
        },

        { title :["단기제작의 힘!! 부트스트랩", ""],
          cls : ["BootStrap", "bootbg"],
          href : "pindrop.cafe24.com/tving",
          bg : "black"
        },
        { title : ["쇼핑몰", ""],
          cls : ["ec", "mallbg"],
          href : "jiniddo.cafe24.com",
          bg : "green"
        }
      ]
      
      return (
        <div className="py-5">
          <div className="mainswiper py-5"> 
    <Swiper 
      spaceBetween={20}
      slidesPerView={1.1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter:true
      }}
      scrollbar={{ draggable: true }}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      modules={[Autoplay, Pagination, Navigation ]}
    >
      {
        swiperdb.map ((item, index) => {
          const myclass = item.cls.join(" ")
          return <SwiperSlide  >

            <div className="d-flex row">
              <div  className={"col-6 border-50 ounded "+ myclass}  style={{height: 600 }}>
                 
              </div>
              <div className="col-md-6">
                <Link to ={item.href} className='d-flex justify-content-center align-items-center flex-column h-100'>
                  <div className='container bg'>
                    <h2>{item.title[0]}</h2>
                    <p>{item.title[1]}</p>
                  </div>
                </Link>
              </div>

            </div>
            
            </SwiperSlide>
        })
      }
    </Swiper>
    </div>

        </div>
    
  );
};

export default MainSwiper;



