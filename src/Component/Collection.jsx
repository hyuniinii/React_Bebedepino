import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


function Collection (props){
    let [collect] = useState([1,2,3,4,5,6]);/* 5,6까지 더있음 스와이퍼 돌려아함 */
   
    return(
        <div className='topWrap'>
        <div className="top wrap">
            <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={3} /* 스와이퍼 버그 3으로하면 되고 4로하면 안됨 */
            loop={true}
            initialSlide={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            >
    
            {
                collect.map((e, i)=>{
                    let imgSrc = '/image/new_'+(i+1) +'.jpg';
                    return(
                        <SwiperSlide key={i}><Link to="/"><img src={imgSrc} alt='new collection'></img></Link><span>MINJUKIM COLLABORATION COLLECTION</span></SwiperSlide>
                    )
                })
            }
            </Swiper>
              <div className='bottom wrap'>
              <div className='box'><video src='/image/new.mp4' autoPlay muted/></div>
                    <div className='box'><img src='/image/new.gif' alt=''></img></div>
                </div>
        </div>
    </div>
                
    )
}

export default Collection;