import arrDown from '../../Images/arrDown.png';
import { useState, useEffect } from 'react';

const Ads = () => {
  const  [ToggleDropdown, setToggleDropdown ] = useState('')

  function drop() {
    setToggleDropdown('block');
  }

  useEffect

  return (
    <div className='flex flex-row justify-around bg-slate-50 p-2 text-black font-light sm:flex-row'>
      <div className='flex flex-row sm:w-full sm:p-1'>
      <p className=''>Special collection already available.</p>
      <a href="#">&nbsp;Read more ...</a>
      </div>
      <div className='flex flex-row gap-6'>
            <div onclick={drop} className='hidden sm:block relative'> 
              Links
              <select className='outline-none bg-slate-50 border-0 sm:absolute'>
                <option className='outline-none bg-slate-50 rounded-md shadow-sm'>USD</option>
                <option className='outline-none bg-slate-50 rounded-md shadow-sm'>EURO</option>
              </select>
               <select className='outline-none bg-slate-50'>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
              <a href=''>Sign in / Sign up</a>
            </div>
      </div>
    </div>
  )
}

export default Ads;