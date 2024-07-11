import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../Conntext/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  if (user) {
    return (
      <div className="mx-w-[1140px] mx-auto ">
        <div className="flex justify-between items-center my-4 py-2 rounded-div ">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            {/* <button onClick={handleSignout} className='border px-6 py-2 rounded-xl shadow-lg hover:shadow-2xl'>Sign Out</button> */}
          </div>
        </div>
        <div className="relative">
          {" "}
          {/* Added relative class to the parent */}
          <div className="flex justify-between items-center my-2 py-4 rounded-div sticky top-10 z-50 bg-white">
            {/* Added bg-white class to avoid transparency issues */}
            <div className="w-full min-h-[300px]">
              <h1 className="text-2xl font-bold">Watchlist</h1>
              <SavedCoin />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Account;
