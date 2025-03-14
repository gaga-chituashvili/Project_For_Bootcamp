import React, { useEffect, useState } from "react";
import { getEmployees } from "../../api/employes";
import Card from "./Card";
import { ClimbingBoxLoader } from "react-spinners";

const Products = ({ Employes }) => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEmployees()
      .then((employees) => setEmployees(employees))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const filteredEmployees =
  Employes.length > 0
      ? employees.filter((emp) => Employes.includes(emp.department.name))
      : employees;

  return (
    <section className="flex flex-wrap justify-center gap-y-[30px] gap-x-[52px]">
      {loading && <ClimbingBoxLoader color="#827ec5" size={15} />}
      {filteredEmployees.map((employee, index) => (
        <Card key={index} employee={employee} />
      ))}
      {filteredEmployees.length === 0 && !loading && (
        <p className="text-gray-500">No employees found.</p>
      )}
    </section>
  );
};

export default Products;
