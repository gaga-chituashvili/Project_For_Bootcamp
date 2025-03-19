import React, { useState, useEffect } from "react";
import logo from "../header/logo.png";
import add from "../header/add.svg";
import AddEmployee from "../employes/AddEmployee";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constant/route";
import { getEmployees } from "../../api/employes";
import "../../reset.css";

const Header = () => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getEmployees()
      .then((employees) => setEmployee(employees))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleAddEmployee = (newEmployee) => {
    setEmployee((prevEmployees) => [...prevEmployees, newEmployee]);
    setShowAddEmployee(false);
  };

  return (
    <>
      <header className="w-full h-[100px] flex justify-between bg-white p-[30px]">
        <img onClick={() => navigate(routes.home)} className="w-[250px]" src={logo} alt="Logo" />
        <article className="flex gap-x-[40px]">
          <article
            className="flex justify-center items-center w-[250px] p-[20px] rounded-2xl border border-solid border-[#8888EC] cursor-pointer"
          >
            <button onClick={() => setShowAddEmployee(true)}>თანამშრომლის შექმნა</button>
          </article>
          <article
            className="flex items-center gap-x-[20px] w-[300px] bg-[#8338EC] px-[10px] py-[20px] rounded-2xl cursor-pointer"
            onClick={() => navigate(routes.newTask)}
          >
            <img className="w-[50px]" src={add} alt="Add Task" />
            <h2 className="text-white">შექმენი ახალი დავალება</h2>
          </article>
        </article>
      </header>

      {showAddEmployee && (
        <AddEmployee onClose={() => setShowAddEmployee(false)} onAdd={handleAddEmployee} />
      )}
    </>
  );
};

export default Header;
