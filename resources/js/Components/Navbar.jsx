import { useState } from 'react';
import heart from '../../Images/heart.png';
import cart from '../../Images/cart.png';
import search from '../../Images/search.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center mt-4 p-4">
        <div className="mr-auto">
          <h2 className="text-2xl font-bold">EcomFlow</h2>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6 w-full justify-center">
          <ul className="flex space-x-6 ml-auto mr-auto">
            <li>
              <a className="underline pb-4" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
          </ul>
          <div className="flex items-center space-x-6 ml-auto">
            <div className="relative">
              <input
                className="border-2 outline-none bg-slate-200 text-pl-2 w-[250px] py-1 px-2"
                type="text"
                id="inputField"
                placeholder="What are you looking for?"
              />
              <img
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                src={search}
                alt="search"
              />
            </div>
            <img src={heart} alt="heart" />
            <img src={cart} alt="cart" />
          </div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={toggleDropdown}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4 justify-center items-center">
            <ul className="flex flex-col space-x-6">
              <li>
                <a className="underline pb-4 ml-6" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Sign Up</a>
              </li>
            </ul>
            <div className="relative">
              <input
                className="border-2 outline-none bg-slate-200 text-pl-2 w-auto py-1 px-2"
                type="text"
                id="inputField"
                placeholder="What are you looking for?"
              />
              <img
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                src={search}
                alt="search"
              />
            </div>
            <div className="flex space-x-6">
              <img src={heart} alt="heart" />
              <img src={cart} alt="cart" />
            </div>
          </div>
        </div>
      )}
      <hr />
    </>
  );
};

export default Navbar;