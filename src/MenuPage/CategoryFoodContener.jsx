import MenuItem from "../home/MenuSection/MenuItem";
import { Link } from "react-router-dom";

const CategoryFoodContener = ({ items, title }) => {
  return (
    <div className="w-9/12 mx-auto p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((menu) => (
          <MenuItem key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="w-fit mx-auto mt-6">
        <Link
          to={`/our-shop/${title}`}
          className="bg-transparent  border-black/80 btn   hover:bg-success border-0 border-b-2 text-black"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default CategoryFoodContener;
