import PageHeader from "../Components/PageHeader";
import SectionHeader from "../Components/SectionHeader";
import heroImg from "../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <PageHeader bg={heroImg} title={"OUR MENU"} />
      <SectionHeader headerName={"Don't miss"} title={"TODAY'S OFFER"} />
    </div>
  );
};

export default Menu;
