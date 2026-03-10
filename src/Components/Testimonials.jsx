import { useState } from "react"
import { TestimonialsDatas } from './ApiDatas';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Scrollbar, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from "framer-motion";
import { textAnimate } from "./Animation";

const Testimonials = () => {
  const [getDatas, setDatas] = useState(TestimonialsDatas)
  return (
    <section className='testimonials_area'>
      <motion.h1 variants={textAnimate} initial="offscreen" whileInView="onscreen" className="h1_center">What Clients Say</motion.h1>
      <br></br>
      <br></br>
      <br></br>
      <Swiper 
      modules={[Navigation, Scrollbar, ]}
      spaceBetween={10}
      slidesPerView={'auto'}
      navigation
      loop={true}
      scrollbar={{ draggable: true }}
      className='testimonials' >
      {
        getDatas.map((elem) =>{
          return <SwiperSlide className='card' key={elem.id}>
          <div className='lines'></div>
          <div className='img_box'>
            <img src={elem.imgSrc} alt={elem.title} />
          </div>
          <div className='content'>
            <h2 className="h2_center mt-9">{elem.title}</h2>
            <p>{elem.description}!</p>
          </div>
        </SwiperSlide>
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials;
