import { Link } from "react-router-dom";
import SectionHeader from "../../../Components/SectionHeader";
import useCarts from "../../../hook/useCarts";
import { BsTrash } from "react-icons/bs";

const CartsDb = () => {
  const { carts, refetch } = useCarts();
  const totalPrice = carts.reduce((a, b) => a + b.price, 0);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <div>
      <SectionHeader title={"WANNA ADD MORE?"} headerName={"My Cart"} />
      <div className="px-8 bg-white rounded-md py-3">
        <div className="text-2xl font-bold flex justify-between px-3 mb-4">
          <p>Total orders: {carts.length}</p>
          <p>total price: ${totalPrice.toFixed(2)}</p>
          <Link to={"/dashboard/payment"} className="btn btn-success btn-sm">
            pay
          </Link>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#D1A054]"></th>
                <th className="bg-[#D1A054]">ITEM IMAGE</th>
                <th className="bg-[#D1A054]">ITEM NAME</th>
                <th className="bg-[#D1A054]">PRICE</th>
                <th className="bg-[#D1A054]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {carts.map((food, index) => (
                <tr key={food._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={food.image}
                            alt="Avatar  Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{food.name}</td>
                  <td className="text-end w-20">$ {+food.price.toFixed(2)}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="btn bg-red-800 text-white"
                    >
                      <BsTrash />{" "}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartsDb;
