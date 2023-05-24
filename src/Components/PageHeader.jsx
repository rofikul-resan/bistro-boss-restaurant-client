const PageHeader = ({ bg, title }) => {
  return (
    <div
      style={{ background: ` url('${bg}')` }}
      className="bg-cover pb-28 pt-40"
    >
      <div className="text-center bg-black/50 text-white py-32 w-8/12 mx-auto ">
        <h1 className="text-6xl font-cinzel font-bold">{title}</h1>
        <p className="font-cinzel">Would you like to try a dish?</p>
      </div>
    </div>
  );
};

export default PageHeader;
