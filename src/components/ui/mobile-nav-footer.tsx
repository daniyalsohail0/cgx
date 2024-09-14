import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MobileNavFooter = () => {
  return (
    <div className="p-6">
      <p className="w-4/5 py-5">
        Become a part of our family to stay updated with our
        campaigns and organization.
      </p>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-[#294693] text-white rounded-full font-semibold">
          Contact Us
        </button>
        <button className="px-4 py-2 text-black rounded-full border border-solid font-semibold">
          Get a quote
        </button>
      </div>
      <ul className="flex gap-2 my-5">
        <li className="hover:text-yellow-500 cursor-pointer transition-transform hover:scale-110 duration-200 ease-in-out">
          <FaFacebookF />
        </li>
        <li className="hover:text-yellow-500 cursor-pointer transition-transform hover:scale-110 duration-200 ease-in-out">
          <FaXTwitter />
        </li>
        <li className="hover:text-yellow-500 cursor-pointer transition-transform hover:scale-110 duration-200 ease-in-out">
          <FaLinkedin />
        </li>
        <li className="hover:text-yellow-500 cursor-pointer transition-transform hover:scale-110 duration-200 ease-in-out">
          <FaInstagram />
        </li>
      </ul>
    </div>
  );
};

export default MobileNavFooter;