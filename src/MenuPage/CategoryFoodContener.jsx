import { useState } from "react";
import MenuItem from "../home/MenuSection/MenuItem";

const CategoryFoodContener = ({ items }) => {
  const [limit, setLimit] = useState(4);
  return (
    <div className="w-9/12 mx-auto p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {items.slice(0, limit).map((menu) => (
          <MenuItem key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="w-fit mx-auto mt-6">
        {items.length - limit > 0 && (
          <button
            onClick={() => setLimit(limit + 4)}
            className="bg-transparent  border-black/80 btn   hover:bg-success border-0 border-b-2 text-black"
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryFoodContener;
