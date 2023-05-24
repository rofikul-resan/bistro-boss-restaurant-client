import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import SectionHeader from "../Components/SectionHeader";
import heroImg from "../assets/menu/banner3.jpg";
import CategoryFoodContener from "./CategoryFoodContener";
import useDataFetch from "../hook/DataFetch";
import MenuSectionHeader from "./MenuSectionHeader";

const Menu = () => {
  const [allMenu, setAllMenu] = useState([]);
  useDataFetch("http://localhost:5000/menu", setAllMenu);
  const offeredMenu = allMenu.filter((menu) => menu.category === "offered");
  const dessertMenu = allMenu.filter((menu) => menu.category === "dessert");
  const pizzaMenu = allMenu.filter((menu) => menu.category === "pizza");
  const saladMenu = allMenu.filter((menu) => menu.category === "salad");
  const soupMenu = allMenu.filter((menu) => menu.category === "soup");
  return (
    <div>
      <PageHeader bg={heroImg} title={"OUR MENU"} />
      <SectionHeader headerName={"Don't miss"} title={"TODAY'S OFFER"} />
      <CategoryFoodContener items={offeredMenu} />
      <MenuSectionHeader title={"DESSERTS"} />
      <CategoryFoodContener items={dessertMenu} />
      <MenuSectionHeader title={"pizza"} />
      <CategoryFoodContener items={pizzaMenu} />
      <MenuSectionHeader title={"salad"} />
      <CategoryFoodContener items={saladMenu} />
      <MenuSectionHeader title={"soup"} />
      <CategoryFoodContener items={soupMenu} />
    </div>
  );
};

export default Menu;
