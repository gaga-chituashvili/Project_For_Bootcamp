import React, { useState } from "react";
import logo from "../header/logo.png";
import add from "../header/add.svg";
import AddEmployee from "../employes/AddEmployee"; 

const Header = () => {
  const [addEmployee, setaddEmployee] = useState(false);

  return (
    <>
      <header className="w-full h-[100px] flex justify-between bg-white p-[30px]">
        <img className="w-[250px]" src={logo} />
        <article className="flex gap-x-[40px]">
          <div
            onClick={() => setaddEmployee(true)} 
            className="flex justify-center items-center w-[250px] p-[20px] rounded-2xl border border-solid border-[#8888EC] cursor-pointer"
          >
            <article onClick={()=>setaddEmployee(true)}>თანამშრომლის შექმნა</article>
          </div>
          <div className="flex items-center gap-x-[20px] w-[300px] bg-[#8338EC] px-[10px] py-[20px] rounded-2xl">
            <img className="w-[50px]" src={add} />
            <h2 className="text-white">შექმენი ახალი დავალება</h2>
          </div>
        </article>
      </header>
      
      {addEmployee && <AddEmployee onClose={() => setaddEmployee(false)} />}
    </>
  );
};

export default Header;
