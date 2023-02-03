import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FcComboChart } from 'react-icons/fc';
import { FcCurrencyExchange } from 'react-icons/fc';
import { FcInfo } from 'react-icons/fc';
import { FcAssistant } from 'react-icons/fc';

const Header = () => {

  const [navbar, setNavbar] = useState(false);
  return (
    <div className='fixed w-full z-20 pt-2 nav-bg header'>
      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#" className='flex'>
                <h2 className="text-2xl text-blue-100 font-bold">REACT JS</h2><span className='text-zinc-400 mt-2 text-sm pl-2'>mehrdad</span>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0" style={{direction:'rtl'}}>
               
                <li className="text-white">
                  <Link to={"/"}>
                    <span className="text flex">
                      <FcCurrencyExchange className='text-xl red ml-1 mr-1'/>صفحه اصلی
                    </span>
                  </Link>
                </li>

                <li className="text-white">
                  <Link to={"/Coin/bitcoin"}>
                    <span className="text flex">
                      <FcComboChart className='text-xl red ml-1 md:mr-4'/>بازارهای معاملاتی
                    </span>
                  </Link>
                </li>

                <li className="text-white">
                  <Link to={"/About-Us"}>
                    <span className="text flex">
                      <FcInfo className='text-xl red ml-1 mr-1'/>درباره ما
                    </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );

};
export default Header;