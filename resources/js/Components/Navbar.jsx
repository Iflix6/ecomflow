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
      <div className='flex flex-row lg:justify-around items-center bg-white p-4  mt-2 ml-4 xs:justify-between'>
        <div className='flex flex-row items-center'>
        <img src={logoNav} alt="logo" className="w-6 h-6 filter-light-green lg:ml-12" />
        <style jsx>{`
          .filter-light-green {
            filter: brightness(0) saturate(100%) invert(88%) sepia(44%) saturate(7484%) hue-rotate(72deg) brightness(93%) contrast(101%);
          }
        `}</style>

            <h3 className=' font-bold items-stretch pl-1 text-[30px] '>Molla</h3>
        </div>

        <div className='xs:hidden lg:block'> 
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
        <div className='flex flex-row gap-6 font-thin xs:ml-2 '>
          <div className='flex flex-col items-center hover:bg-green '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-6 xs:size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  
              </svg>
              <p>Account</p>
          </div>
          <div className='flex flex-col items-center '>
            <div className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-6 xs:size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <p className='absolute lg:top-0 lg:left-4 xs:top-0 xs:left-3 text-white bg-lime-400 rounded-full text-center w-4 h-4 flex items-center justify-center text-[12px]'>2</p>

            </div>
              <p>Wishlist</p>
          </div>
          <div className='flex flex-col items-center lg:mr-12'>
            <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-6 xs:size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
              <p className='absolute lg:top-0 lg:left-4 xs:top-0 xs:left-3 text-white bg-lime-400 rounded-full text-center w-4 h-4 flex items-center justify-center text-[12px]'>3</p>
            </div>

              <p>Cart</p>
          </div>

        </div>

      </div>
      <hr className='ml-auto mr-auto w-[85%] items-center xs:hidden lg:block'/>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-between space-x-[800px]'>
          <div className='relative hover:visible'>
            <p className='ml-36'> <span className='font-semibold'>Browse Categories</span>            <span className='ml-24'>|</span></p>
            <div className='absolute hidden hover:visible'>
              <ul className='flex flex-col mt-2 border-1 border-solid border-black'>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400 '><a href='#'>Daily Offers</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Gift Ideas</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Beds</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Lighting</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Sofas & Sleeper Sofas</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Storage</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Armchairs & Chiases</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Decoration</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Kitchen Cabinets</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Coffee & Tables</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Outdoor Furniture</a></li>
                <li className='ml-36 p-2 bg-slate-100/100 font-semibold w-[238px] hover:text-green-400'><a href='#'>Blog</a></li>
              </ul>
            </div>
          </div>
            <p className=''><span className='mr-12'>|</span>Cleareance <span className='font-semibold'>Up to 30% Off</span></p>
        </div>

      </div>
    </>
  );
};

export default Navbar;