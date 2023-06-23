import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// todo is ke hum ne predefined tailwindcss classes rakhi hoi ha
import { styles } from "../Styles";
// todo hum ne jo .js file ma links define kiyay ha wo idher show karny ha
import { navLinks } from "../constants/index";

import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="px-3 md:px-6 relative  h-full z-20 items-center w-full bg-primary">
      <div className="flex py-3 justify-between">
        <div className="img flex">
          <img src={logo} alt="" className="w-8 h-10 object-contain" />
          <p className="font-extralight sm:font-light md:font-xl">
            Abdullah{" "}
            <span className="text-red-300 line-clamp-1 md:line-clamp-none">
              | Salman
            </span>
          </p>
        </div>
        <div className="navlinks hidden md:block">
          <ul className="flex flex-col md:flex md:flex-row md:gap-10 py-3 ">
            {navLinks.map((nlinks) => (
              <li
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a
                  href={`#${nlinks.id}`}
                  className={`${
                    active === nlinks.title ? "text-white" : "text-secondary"
                  } font-medium hover:text-white`}
                >
                  {nlinks.title}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block md:hidden">
          <img
            src={toggle ? close : menu}
            alt=""
            className="text-white"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient rounded z-10 right-6 gap-3 px-4 absolute py-4 `}
          >
            <ul className="flex flex-col md:hidden">
              {navLinks.map((nlinks) => (
                <li>
                  <a href={`#${nlinks.id}`}>{nlinks.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
