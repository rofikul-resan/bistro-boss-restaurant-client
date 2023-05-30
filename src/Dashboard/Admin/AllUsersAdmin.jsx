import { BsTrash } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import SectionHeader from "../../Components/SectionHeader";
import useAllUser from "../../hook/useAllUser";
import axios from "axios";

const AllUsersAdmin = () => {
  const { users, refetch } = useAllUser();
  const handleUserDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then((data) => {
      if (data.data.deletedCount > 0) {
        refetch();
      }
    });
  };
  return (
    <div>
      <SectionHeader title={"MANAGE ALL USERS"} headerName={"How many??"} />
      <div className="px-8 bg-white rounded-md py-3">
        <div className="text-2xl font-bold flex justify-between px-3 mb-4">
          <p>Total User : {users.length}</p>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#D1A054]"></th>
                <th className="bg-[#D1A054]">NAME</th>
                <th className="bg-[#D1A054]">EMAIL</th>
                <th className="bg-[#D1A054]">ROLE</th>
                <th className="bg-[#D1A054]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.roll ? (
                      <span>Admin</span>
                    ) : (
                      <button className="btn btn-success text-xl">
                        {" "}
                        <MdAdminPanelSettings />
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleUserDelete(user._id)}
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

export default AllUsersAdmin;
