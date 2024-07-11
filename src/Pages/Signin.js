import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Conntext/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [reset, setReset] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { signIn, passwordResetEmail } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      // navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await passwordResetEmail(email);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      {!reset ? (
        <div className="max-w-[400px] mx-auto min-h-[400px] px-4 py-20">
          <h1 className="text-2xl font-bold">Sign In</h1>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label>Email</label>
              <div className="my-2 flex items-center justify-center w-full relative rounded-sm shadow-xl">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-primary border-input h-[35px] rounded-xl pr-6 pl-2 placeholder:text-sm border"
                  type="email"
                  placeholder="Enter email"
                  autoComplete="email"
                  value={email}
                />
                <AiOutlineMail className="absolute right-2 top-2 text-gray-400" />
              </div>
            </div>
            <div className="my-4">
              <label>Password</label>
              <div className="my-2 flex items-center justify-center w-full relative rounded-sm shadow-xl">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-primary border-input h-[35px] rounded-xl pr-6 pl-2 placeholder:text-sm border"
                  type={show ? "text" : "password"}
                  value={password}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  {show ? (
                    <FiEyeOff className="absolute right-2 top-2 text-gray-400" />
                  ) : (
                    <FiEye className="absolute right-2 top-2 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setReset(true);
              }}
              className="underline py-3 text-center w-full"
            >
              Reset password
            </button>
            <button
              type="submit"
              className="w-full my-2 p-3 bg-button text-btnText rounded-sm shadow-xl"
            >
              Sign In
            </button>
          </form>
          <p className="w-full my-2 py-2 text-center">
            Don't have an account? &nbsp;
            <Link to="/signup">
              <span className="text-green-500">Sign Up</span>
            </Link>
          </p>
        </div>
      ) : (
        <div className="max-w-[400px] mx-auto min-h-[400px] px-4 py-20 flex flex-col gap-4">
          <h1 className="text-lg text-center">Reset password</h1>
          <div className="my-2 flex items-center justify-center w-full relative rounded-sm shadow-xl">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full bg-primary border-input h-[35px] rounded-xl pr-6 pl-2 placeholder:text-sm border"
              type="email"
              placeholder="Enter email"
              autoComplete="email"
            />
            <AiOutlineMail className="absolute right-2 top-2 text-gray-400" />
          </div>
          <button
            className="w-full bg-button text-btnText my-4 p-2"
            onClick={resetPassword}
          >
            Reset
          </button>
          <button
            className="w-full my-4 p-2 text-primary"
            onClick={() => setReset(false)}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Signin;
