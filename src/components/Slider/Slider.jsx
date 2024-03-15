import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

  >
    <SwiperSlide><img src="Images/img_1.jpg" alt="" style={{width : "100%", height: "70vh"}}/></SwiperSlide>
    <SwiperSlide><img src="Images/img_2.jpg" alt="" style={{width : "100%", height: "70vh"}}/></SwiperSlide>
    <SwiperSlide><img src="Images/img_3.jpg" alt="" style={{width : "100%", height: "70vh"}}/></SwiperSlide>
    <SwiperSlide><img src="Images/img_4.jpg" alt="" style={{width : "100%", height: "70vh"}}/></SwiperSlide>
    <SwiperSlide><img src="Images/img_5.jpg" alt="" style={{width : "100%", height: "70vh"}}/></SwiperSlide>
    <SwiperSlide><img src="Images/img_6.jpg" alt="" style={{width : "100%", height: "70vh"}}/></SwiperSlide>
    <SwiperSlide><img src="Images/img_7.jpg" alt="" style={{width : "100%", height: "70vh"}}/></SwiperSlide>
  </Swiper>
  )
}

export default Slider
