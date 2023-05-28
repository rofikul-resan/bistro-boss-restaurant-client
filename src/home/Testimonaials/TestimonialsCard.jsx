import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsCard = ({ reviews }) => {
  const { name, rating, details } = reviews;
  return (
    <div className="mb-16">
      <div className="w-fit mx-auto">
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      </div>
      <div className="text-center w-9/12 mx-auto space-y-2">
        <h1 className="text-6xl w-fit mx-auto my-6">
          <FaQuoteLeft />
        </h1>
        <p>{details}</p>
        <h3 className="text-orange-500 font-semibold text-xl">{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialsCard;
