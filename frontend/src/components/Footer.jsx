import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat dolorem ipsa eius quis molestias ratione, error aspernatur facere. Ullam assumenda repellat tenetur voluptatibus saepe sapiente quisquam quo necessitatibus blanditiis.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET ON TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>03313550868</li>
            <li>amuh@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className="py-5 teaxt-sm text-center">Copyright 2025@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
