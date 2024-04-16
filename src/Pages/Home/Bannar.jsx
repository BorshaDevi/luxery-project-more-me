
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import 'animate.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Bannar = () => {
    return (
       <>
       <div className=' text-center  p-5 space-y-4  animate__animated animate__bounce animate__zoomInRight'>
        <h1 className='text-3xl font-bold ' >All types of island are here</h1>
        <p>Choose what kind of island are you like...</p>
       </div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://i.ibb.co/25pcfWC/arborek-island-atoll.jpg' ></img></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co/41sxNk7/maldives-island.jpg' ></img></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/PrHYwCH/outdoor-swimming-pool.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/3fTmqxH/beautiful-young-asian-woman-happy-smile-relax-swimming-pool.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/pxLq9Js/beautiful-tropical-beach-sea.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
       </>
    );
};
export default Bannar;





















