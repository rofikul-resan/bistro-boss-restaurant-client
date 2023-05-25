import { useState } from "react";
import useDataFetch from "../hook/DataFetch";
import TabCard from "./TabCard";

const TabContener = ({ title }) => {
  const [categoryFood, setCategoryFood] = useState([]);
  useDataFetch(`http://localhost:5000/category/${title}`, setCategoryFood);
  return (
    <div className="grid md:grid-cols-3 gap-8 ">
      {categoryFood.map((food) => (
        <TabCard key={food._id} food={food} />
      ))}
    </div>
  );
};

export default TabContener;
