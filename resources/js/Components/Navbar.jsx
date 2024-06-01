import { useState } from 'react';
import heart from '../../Images/heart.png';
import cart from '../../Images/cart.png';
import search from '../../Images/search.png';
import logoNav from '../../Images/logoNav.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search logic with searchTerm
    console.log('Search term:', searchTerm);
    // Reset the search term after submission
    setSearchTerm('');
  };

  return (
    <>
      <div className='flex flex-row justify-around items-center bg-white p-4  mt-4 ml-4'>
        <div className='flex flex-row items-center'>
        <img src={logoNav} alt="logo" className="w-8 h-8 filter-light-green" />
        <style jsx>{`
          .filter-light-green {
            filter: brightness(0) saturate(100%) invert(88%) sepia(44%) saturate(7484%) hue-rotate(72deg) brightness(93%) contrast(101%);
          }
        `}</style>

            <h3 className=' font-bold items-stretch pl-1 text-[30px] '>Molla</h3>
        </div>

        <div className=''> 
        <form onSubmit={handleSubmit} className="flex items-center">
            <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search Product..."
                    className="pl-10 pr-12 py-2 rounded-md border border-gray-300 focus:outline-none w-[600px]"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 px-4 py-2 bg-transparent text-black rounded-r-md focus:outline-none"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
            </div>
        </form>
        </div>
        <div>
          <div className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  
              </svg>
              <p>Account</p>
          </div>

        </div>

      </div>
      <hr className='ml-auto mr-auto w-[80%] items-center'/>
    </>
  );
};

export default Navbar;