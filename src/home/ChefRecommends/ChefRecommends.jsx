import SectionHeader from "../../Components/SectionHeader";
import FoodCard from "./FoodCard";

const ChefRecommends = () => {
  return (
    <div className="mb-20 md:w-9/12 mx-auto p-6">
      <SectionHeader title={"CHEF RECOMMENDS"} headerName={"Should Try"} />
      <div className="grid md:grid-cols-3 gap-4">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default ChefRecommends;
