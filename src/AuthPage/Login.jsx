import { useForm } from "react-hook-form";
import img from "../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [submit, setSubmit] = useState(false);
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleCaptcha = (e) => {
    const valid = validateCaptcha(e.target.value);
    setSubmit(valid);
  };

  return (
    <div
      style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
      className="grid md:grid-cols-2 gap-14 place-items-center w-9/12 mx-auto rounded-md"
    >
      <img src={img} alt="" />
      <div className="w-9/12 mx-auto">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1 className="text-center font-bold text-3xl my-6">Log In</h1>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl font-semibold ">Email</span>
            </label>
            <input
              type="text"
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
          <div className="form-control py-5 ">
            <LoadCanvasTemplate />
          </div>
          <div className="form-control">
            <input
              onBlur={handleCaptcha}
              type="text"
              placeholder="Type hear"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn btn-block btn-success my-6"
              disabled={!submit}
            >
              Log In{" "}
            </button>
          </div>
        </form>
        <p className="text-orange-400 font-bold text-center">
          New here?{" "}
          <Link to={"/auth/sing-up"} className="link">
            Create a New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
