import React, { useState } from "react";
import logo from "../header/logo.png";
import add from "../header/add.svg";
import AddEmployee from "../employes/AddEmployee";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constant/route";
import "../../reset.css"

const Header = () => {
  const [addEmployee, setAddEmployee] = useState(false);

  const navigate = useNavigate()

  return (
    <>
      <header className="w-full h-[100px] flex justify-between bg-white p-[30px]">
        <img onClick={()=>navigate(routes.home)} className="w-[250px]" src={logo} alt="Logo" />
        <article className="flex gap-x-[40px]">
          <article
            onClick={() => setAddEmployee(true)}
            className="flex justify-center items-center w-[250px] p-[20px] rounded-2xl border border-solid border-[#8888EC] cursor-pointer"
          >
            <article>თანამშრომლის შექმნა</article>
          </article>
          <article
            className="flex items-center gap-x-[20px] w-[300px] bg-[#8338EC] px-[10px] py-[20px] rounded-2xl cursor-pointer"
            onClick={()=>navigate(routes.newTask)}
          >
            <img className="w-[50px]" src={add} alt="Add Task" />
            <h2 className="text-white">შექმენი ახალი დავალება</h2>
          </article>
        </article>
      </header>

      {addEmployee && <AddEmployee onClose={() => setAddEmployee(false)} />}
    </>
  );
};

export default Header;

