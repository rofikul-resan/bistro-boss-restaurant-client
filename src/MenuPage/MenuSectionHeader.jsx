const MenuSectionHeader = ({ title }) => {
  return (
    <div
      style={{ background: "url('../../src/assets/home/chef-service.jpg')" }}
      className={` h-[600px] bg-contain grid place-items-center my-20 `}
    >
      <div className="w-8/12 mx-auto p-20 text-center bg-black/50 text-white ">
        <h1 className="text-5xl font-cinzel font-bold">{title}</h1>
        <p>
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default MenuSectionHeader;
