import { useForm } from "react-hook-form";
import SectionHeader from "../../Components/SectionHeader";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosSecure from "../../hook/useAxiosSecure";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const { axiosSecure } = useAxiosSecure();
  const addItemSubmit = (data) => {
    const { name, recipe, price, category, image } = data;
    const formData = new FormData();
    formData.append("image", image[0]);
    const postUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_UPLOAD_TOKEN
    }&expiration=600`;
    console.log(postUrl);
    fetch(postUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const imgUrl = data.data.display_url;
          const item = { name, image: imgUrl, category, recipe, price: +price };
          axiosSecure.post("/menu", item).then((res) => {
            if (res.data.insertedId) {
              alert("menu add");
              reset();
            }
          });
        }
      });
  };

  return (
    <div>
      <SectionHeader title={"ADD AN ITEM"} headerName={"What's new?"} />
      <div className=" bg-base-300 w-10/12 mx-auto p-10">
        <form onSubmit={handleSubmit(addItemSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Recipe name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className=" flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Category*</span>
              </label>

              <select
                defaultValue={"Pick One"}
                className="select select-bordered w-full "
                {...register("category", { required: true })}
              >
                <option disabled>Pick One</option>
                <option>soup</option>
                <option>dessert</option>
                <option>pizza</option>
                <option>popular</option>
                <option>salad</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              placeholder="Recipe Details "
              className="w-full h-44 input input-bordered p-6 resize-none"
            ></textarea>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered bg-white mt-5 w-full max-w-xs"
          />

          <div className="form-control w-fit mt-5">
            <button
              type="submit"
              className="btn bg-gradient-to-l gap-5 to-[#835D23] from-[#B58130] text-white border-0"
            >
              Add Item <ImSpoonKnife className="text-xl" />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
