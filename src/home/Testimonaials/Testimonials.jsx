import { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialsCard from "./TestimonialsCard";
import { Navigation } from "swiper";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionHeader
        title={"TESTIMONIALS"}
        headerName={"What Our Clients Say"}
      />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-10/12 mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <TestimonialsCard reviews={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
