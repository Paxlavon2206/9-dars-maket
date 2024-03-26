import React from 'react'
import { IoIosSearch } from "react-icons/io";
export const Search = () => {
  return (
    <div className='relative hidden md:flex flex-grow'>
  <input className='flex-grow outline-redBg text-inputtext py-[12px] pl-[16px]  text-[16px] border border-inputborder' type="text" placeholder='Поиск' />
  <IoIosSearch className=' flex-grow absolute top-[34%] md:hidden lg:right-[4%] lg:flex'/>
</div>


  )
}
