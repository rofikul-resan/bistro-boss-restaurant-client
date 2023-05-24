import Banner from "./Banner";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Gallary from "./Gallary";
import Menu from "./MenuSection/Menu";
import MenuBanner from "./MenuSection/MenuBanner";
import Testimonials from "./Testimonaials/Testimonials";
import "./home.css";

const Home = () => {
  return (
    <div className="space-y-7">
      <Banner />
      <Gallary />
      <Menu />
      <div className="md:w-9/12 bg-[#151515] mx-auto">
        <h1 className="text-white font-Raleway text-3xl font-semibold text-center py-16 mb-20">
          Call Us: +88 0192345678910
        </h1>
      </div>
      <ChefRecommends />
      <MenuBanner />
      <Testimonials />
    </div>
  );
};

export default Home;
