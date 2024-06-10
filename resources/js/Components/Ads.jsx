import arrDown from '../../Images/arrDown.png';
import { useState } from 'react';

const Ads = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className='flex flex-row justify-around items-center  bg-slate-50 p-2 text-black font-light xs:flex-row ml-auto mr-auto'>
      <div className='flex flex-row xs:w-full xs:p-1 lg:ml-36'>
        <p className=''>Special collection already available.</p>
        <a href="#">&nbsp;Read more ...</a>
      </div>
      <div className='flex flex-row gap-6 items-center'>
        <div className='relative'>
          {/* Button shown on small to medium devices, hidden on large devices */}
          <button onClick={toggleDropdown} className='flex items-center xs:pt-1 lg:hidden'>
            Links
            <img src={arrDown} alt="Arrow Down" className='ml-2 bg-slate-400 mr-3' />
          </button>
          
          {/* Dropdown content */}
          <div className={`absolute z-10 bg-white rounded-md shadow-lg p-2 right-0 w-[150px] ${showDropdown ? 'block' : 'hidden'} lg:hidden top-12`}>
            <select className='outline-none bg-white border-0 mb-2'>
              <option className='outline-none bg-white rounded-md shadow-sm'>USD</option>
              <option className='outline-none bg-white rounded-md shadow-sm'>EURO</option>
            </select>
            <select className='outline-none bg-white mb-2'>
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
            <a href='' className='block'>Sign in / Sign up</a>
          </div>
        </div>
        
        {/* Content shown in row format on large devices */}
        <div className='hidden lg:flex lg:flex-row lg:gap-6 lg:items-center text-nowrap lg:mr-36'>
          <select className='outline-none bg-slate-50 border-0'>
            <option className='outline-none bg-slate-50 rounded-md shadow-sm'>USD</option>
            <option className='outline-none bg-slate-50 rounded-md shadow-sm'>EURO</option>
          </select>
          <select className='outline-none bg-slate-50'>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
          <a href='' className='mr-6'>Sign in / Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Ads;
