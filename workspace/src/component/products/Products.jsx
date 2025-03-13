import React, { useEffect, useState } from "react";
import { getEmployees } from "../../api/employes";
import Card from "./Card";
import {ClimbingBoxLoader} from "react-spinners"

const EmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getEmployees()
      .then((employees) => {
        setEmployees(employees)
        console.log(employees);
        
      })
      .catch((error) => {
        setError(error)
      }).finally(()=>setLoading(false))
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-y-[30px] gap-x-[52px]">
        {loading && <ClimbingBoxLoader
      color="#827ec5"
      size={15}
    />}
      {employees.map((employee, index) => (
        <Card key={index} employee={employee} />
      ))}
    </section>
  );
};

export default EmployeeComponent;
