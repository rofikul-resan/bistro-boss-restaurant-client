import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

const SocialLogin = () => {
  return (
    <div className=" my-8">
      <p className="text-center font-semibold">Or sign in with</p>
      <div className="grid w-fit mx-auto my-4 grid-cols-3 gap-6">
        <button className="border-2 rounded-full border-gray-700">
          {" "}
          <BsFacebook className="text-xl m-3" />{" "}
        </button>
        <button className="border-2 rounded-full border-gray-700">
          {" "}
          <BsGoogle className="text-xl m-3" />{" "}
        </button>
        <button className="border-2 rounded-full border-gray-700">
          {" "}
          <BsGithub className="text-xl m-3" />{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
