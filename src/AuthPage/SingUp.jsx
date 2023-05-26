import { useForm } from "react-hook-form";
import img from "../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const SingUp = () => {
  const { register, handleSubmit } = useForm();
  const handleSingUp = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
      className="grid md:grid-cols-2 gap-14 place-items-center w-9/12 mx-auto rounded-md"
    >
      <img src={img} alt="" className="order-2" />
      <div className="w-9/12 mx-auto order-1">
        <form onSubmit={handleSubmit(handleSingUp)}>
          <h1 className="text-center font-bold text-3xl mt-6">Sing Up</h1>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold ">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold ">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered"
              {...register("password")}
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-block btn-success my-6">
              Sing Up
            </button>
          </div>
        </form>
        <p className="text-orange-400 font-bold text-center">
          Already registered?
          <Link to={"/auth/login"} className="link">
            Go to log in
          </Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default SingUp;