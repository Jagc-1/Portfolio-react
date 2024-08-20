/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <div className="w-full h-[8ch] bg-neutral-950 shadow-sm border-b border-neutral-900/50 lg:px-80 md:px-60 sm:px-7 px-4 flex justify-between">
      {/* Logo Section */}
      <Link to="/" className="flex flex-col">
        <span className="md:text-[0.65rem] text-[0.5rem] text-neutral-400 mb-1.5">
          Localhost:
        </span>
        <h1 className="md:text-2xl text-lg font-bold text-neutral-500 flex">
          <span className="text-green-500">3</span>
          (<span className="text-green-500">0</span>)
          <sub className="text-green-500">3</sub>
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <ul className="list-none md:text-base text-sm text-neutral-400 font-medium flex items-center md:gap-8 gap-4">
          <li>
            <Link
              to={"/projects"}
              className={`hover:text-neutral-500 ease-in-out duration-300 ${
                active === '/projects' ? 'text-green-500' : 'text-neutral-400'
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={"/me"}
              className={`hover:text-neutral-500 ease-in-out duration-300 ${
                active === '/me' ? 'text-green-500' : 'text-neutral-400'
              }`}
            >
              About Me
            </Link>
          </li>
        </ul>

        {/* GitHub Icon */}
        <Link
          to={"https://github.com/Jagc-1"} className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-900/40 flex items-center justify-center text-neutral-400 text-lg hover:text-neutral-500 ease-in-out duration-300"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
