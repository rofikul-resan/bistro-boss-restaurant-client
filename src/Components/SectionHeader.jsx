const SectionHeader = ({ title, headerName }) => {
  return (
    <div className="w-fit text-center space-y-3 mx-auto mt-10  mb-12">
      <p className="text-orange-400 font-semibold text-sm">
        ---{headerName}---
      </p>
      <h1 className="px-8 py-2 text-3xl border-y-2 uppercase font-bold border-gray-400">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
