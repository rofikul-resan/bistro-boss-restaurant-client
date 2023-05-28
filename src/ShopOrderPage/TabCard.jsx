import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../hook/useCarts";

const TabCard = ({ food }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { recipe, price, name, image, _id } = food;
  const { refetch } = useCarts();

  const handleAddCarts = () => {
    const orderItem = {
      orderItemID: _id,
      price,
      name,
      image,
      email: user?.email,
    };
    if (user && user.email) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
          }
          console.log(data);
        });
    } else {
      navigate("/auth/login", { state: location.pathname });
    }
  };
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
          <button
            onClick={() => handleAddCarts(food)}
            className="bg-transparent  border-black/80 btn   hover:bg-success border-0 border-b-2 text-orange-700 "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
