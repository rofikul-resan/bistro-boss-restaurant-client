const MenuItem = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div className="flex flex-row">
      <img
        className="h-20 w-20 "
        style={{ borderRadius: " 0 100px 100px 100px" }}
        src={image}
        alt={name}
      />
      <div>
        <h3 className="font-cinzel text-xl font-semibold ">
          {name} -----------------
        </h3>
        <p className="text-gray-600 text-sm w-11/12 ">{recipe}</p>
      </div>
      <p className="text-orange-400 font-semibold  "> ${price}</p>
    </div>
  );
};

export default MenuItem;
