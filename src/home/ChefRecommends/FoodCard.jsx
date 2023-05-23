import img from "../../assets/home/slide1.jpg";
const FoodCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="overflow-hidden h-80">
        <img className="w-full" src={img} alt={""} />
      </figure>
      <div className="card-body text-center px-8">
        <h2 className="font-semibold text-2xl text-black">Caeser Salad</h2>
        <p className="text-sm">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <div className="card-actions justify-center">
          <button className="bg-transparent  border-black/80 btn   hover:bg-success border-0 border-b-2 text-orange-700 ">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
