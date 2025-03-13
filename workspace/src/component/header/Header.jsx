import React from 'react'
import logo from "../header/logo.png"
import add from "../header/add.svg"

const Header = () => {
  return (
    <header className='w-full h-[100px] flex justify-between  bg-white p-[30px]'>
      <img className='w-[250px]' src={logo}/>
      <article className='flex gap-x-[40px]'>
      <div className='flex justify-center items-center w-[250px] p-[20px] rounded-2xl border border-solid border-[#8888EC]'>
      <h2>თანამშრომლის შექმნა</h2>
     </div>
     <div className='flex items-center gap-x-[20px] w-[300px] bg-[#8338EC] px-[10px] py-[20px] rounded-2xl '>
      <img className='w-[50px]' src={add}/>
      <h2 className='text-white'>შექმენი ახალი დავალება</h2>
     </div>
      </article>
     
    </header>
  )
}

export default Header
