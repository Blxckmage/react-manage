import logo from "../image/logo.svg";
import { useState } from "react";

const Header = () => {
  const nav = document.getElementById("menu");

  const handleClick = (e) => {
    e.currentTarget.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex item-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" class="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" class="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" class="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" class="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" class="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
