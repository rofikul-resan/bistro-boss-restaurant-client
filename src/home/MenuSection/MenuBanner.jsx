import img from "../../assets/home/featured.jpg";
const MenuBanner = () => {
  return (
    <div className=' bg-[url("../../src/assets/home/featured.jpg")] bg-black/50 bg-blend-overlay mx-auto py-12 bg-cover bg-fixed'>
      <div className="w-fit text-center space-y-3 mx-auto mt-20  mb-12">
        <p className="text-orange-400 font-semibold text-sm">
          ---Check it out---
        </p>
        <h1 className="px-8 py-2 text-3xl border-y-2 font-bold text-white border-gray-400">
          FROM OUR MENU
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3 text-white  w-6/12 mx-auto">
        <img src={img} alt="" className="rounded-md" />
        <div className="space-y-1">
          <p className="font-semibold">March 20, 2023</p>
          <p className="font-semibold">WHERE CAN I GET SOME?</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn text-white border-0 border-b-2 btn-outline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
