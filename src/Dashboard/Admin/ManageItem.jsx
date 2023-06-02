import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import SectionHeader from "../../Components/SectionHeader";
import useMenu from "../../hook/useMenu";
import useAxiosSecure from "../../hook/useAxiosSecure";

const ManageItem = () => {
  const { menu, refetch } = useMenu();
  const { axiosSecure } = useAxiosSecure();

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/menu/${id}`);
    if (res.data.deletedCount > 0) {
      alert("Item Delete Successful");
      refetch();
    }
  };
  return (
    <div>
      <SectionHeader title={"MANAGE ALL ITEMS"} headerName={"What's new?"} />
      <h1 className="font-bold mb-3 ml-3 text-3xl">
        Total Item : {menu.length}
      </h1>
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
              <th className="bg-[#D1A054]">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((food, index) => (
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
                    //   onClick={() => handleDelete(food._id)}
                    className="btn bg-orange-400 border-0 text-white"
                  >
                    <BiEdit className="text-xl" />{" "}
                  </button>
                </th>
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
  );
};

export default ManageItem;
