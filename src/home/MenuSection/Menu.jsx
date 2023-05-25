import { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return (
    <div className=" md:w-9/12 p-6 mx-auto">
      <SectionHeader title={"FROM OUR MENU"} headerName={"Check it out"} />
      <div className="grid gap-4 md:grid-cols-2">
        {menus.slice(0, 6).map((menu) => (
          <MenuItem key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="w-fit mx-auto mt-6">
        <button className="bg-transparent  border-black/80 btn   hover:bg-success border-0 border-b-2 text-black">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
