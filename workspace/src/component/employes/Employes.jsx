import React, { useEffect, useState } from "react";
import { getEmployees } from "../../api/employes";
import Card from "./Card";
import { ClimbingBoxLoader } from "react-spinners";
import AddEmployee from "./AddEmployee";

const Employee = ({ Employes }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEmployees()
      .then((employees) => setEmployees(employees))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setShowAddEmployee(false);
  };

  const filteredEmployees =
    Employes.length > 0
      ? employees.filter((emp) => Employes.includes(emp.department.name))
      : employees;

  return (
    <section className="flex flex-col items-center">
       <button
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-md"
        onClick={() => setShowAddEmployee(true)}
      >
        თანამშრომლის შექმნა
      </button>
      <section className="flex flex-wrap justify-center gap-y-[30px] gap-x-[52px] relative">
        {loading && <ClimbingBoxLoader color="#827ec5" size={15} />}
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} employee={employee} />
        ))}
        {filteredEmployees.length === 0 && !loading && (
          <p className="text-gray-500">No employees found</p>
        )}
      </section>



      {showAddEmployee && (
        <AddEmployee onClose={() => setShowAddEmployee(false)} onAdd={handleAddEmployee} />
      )}
    </section>
  );
};

export default Employee;
