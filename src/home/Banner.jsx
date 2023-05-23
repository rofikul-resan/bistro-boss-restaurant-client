import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/03.png";
import img4 from "../assets/home/04.jpg";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={"1500"}>
      <img src={img1} className="w-full" />
      <img src={img2} className="w-full" />
      <img src={img3} className="w-full" />
      <img src={img4} className="w-full" />
      <img src={img5} className="w-full" />
      <img src={img6} className="w-full" />
    </Carousel>
  );
};

export default Banner;
