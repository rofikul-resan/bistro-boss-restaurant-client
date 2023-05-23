import { Pagination } from "swiper";
import SectionHeader from "../Components/SectionHeader";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";

const Gallary = () => {
  return (
    <div className="md:w-9/12 px-4 mx-auto pb-5">
      <SectionHeader
        title={"ORDER ONLINE"}
        headerName={"From 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={img1} alt="" className="rounded-md " />
            <h2 className="-mt-6 text-center uppercase text-white">Salads</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="" className="rounded-md " />
            <h2 className="-mt-6 text-center uppercase text-white">Soups</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="" className="rounded-md " />
            <h2 className="-mt-6 text-center uppercase text-white">pizzas</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="" className="rounded-md " />
            <h2 className="-mt-6 text-center uppercase text-white">Desserts</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="" className="rounded-md " />
            <h2 className="-mt-6 text-center uppercase text-white">Salads</h2>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" py-28 bg-[url('../../src//assets//home/featured.jpg')] bg-cover mt-14 bg-fixed ">
        <div className="text-justify px-24 py-12 w-8/12 mx-auto bg-white ">
          <h1 className="font-cinzel font-semibold text-center text-2xl ">
            Bistro Boss
          </h1>
          <p className="text-xs mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
