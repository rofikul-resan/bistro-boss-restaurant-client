const TabCard = ({ food }) => {
  const { recipe, price, name, image } = food;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="overflow-hidden h-52 relative">
        <img className="w-full" src={image} alt={name} />
        <div className="badge absolute right-4 top-6 "> $ {price}</div>
      </figure>
      <div className="card-body text-center px-8">
        <h2 className="font-semibold text-2xl text-black">{name}</h2>
        <p className="text-sm">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="bg-transparent  border-black/80 btn   hover:bg-success border-0 border-b-2 text-orange-700 ">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
