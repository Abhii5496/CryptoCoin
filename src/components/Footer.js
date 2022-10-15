import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import ToogleTheme from "./ToogleTheme";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase ">
          <div>
            <h2 className="font-bold"> Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact us</li>
              <li className="text-sm py-2">Api Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold"> Info</h2>
            <ul>
              <li className="text-sm py-2">About us</li>
              <li className="text-sm py-2">Career</li>
              <li className="text-sm py-2">Legal</li>
              <li className="text-sm py-2">Invest</li>
            </ul>
          </div>
        </div>

      <div className="text-right">
        <div className="w-full justify-end">
          <div className="w-full md:w-[300px] py-4 relative ">
            <div className="hidden md:flex justify-center md:justify-end md:py-0 md:pb-4 mt-[-1rem] ">
              <ToogleTheme />
            </div>
            <p className="text-center font-bold md:text-right">Sign up For crypto News</p>
            <div className="py-4">
              <form>
                <input
                  className="bg-primary border-input p-2 mr-2 w-full shadow-2xl rounded-2xl md:w-auto outline-dashed"
                  type="email"
                  placeholder="Enter your Email"
                />
                <button className="bg-button text-btnText px-4 p-2 w-full shadow-xl rounded-2xl hover:shadow-2xl md:w-auto my-2 ">
                  {" "}
                  Sign up
                </button>
              </form>
            </div>

            <div className="flex py-4 justify-evenly text-accent">
              <AiOutlineInstagram />
              <FaFacebook />
              <FaTwitter />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
      </div>
      <p className="text-center py-4">Powered By CryptoCoin</p>
    </div>
  );
};

export default Footer;
