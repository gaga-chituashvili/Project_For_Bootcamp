import React, { useState } from "react";
import logo from "../header/logo.png";
import add from "../header/add.svg";
import AddEmployee from "../employes/AddEmployee";
import NewTask from "../NewTask"

const Header = () => {
  const [addEmployee, setAddEmployee] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);

  return (
    <>
      <header className="w-full h-[100px] flex justify-between bg-white p-[30px]">
        <img className="w-[250px]" src={logo} alt="Logo" />
        <article className="flex gap-x-[40px]">
          <div
            onClick={() => setAddEmployee(true)}
            className="flex justify-center items-center w-[250px] p-[20px] rounded-2xl border border-solid border-[#8888EC] cursor-pointer"
          >
            <article>თანამშრომლის შექმნა</article>
          </div>
          <div
            className="flex items-center gap-x-[20px] w-[300px] bg-[#8338EC] px-[10px] py-[20px] rounded-2xl cursor-pointer"
            onClick={() => setShowNewTask(true)}
          >
            <img className="w-[50px]" src={add} alt="Add Task" />
            <h2 className="text-white">შექმენი ახალი დავალება</h2>
          </div>
        </article>
      </header>

      {addEmployee && <AddEmployee onClose={() => setAddEmployee(false)} />}
      {showNewTask && <NewTask onClose={() => setShowNewTask(false)} />} 
    </>
  );
};

export default Header;

