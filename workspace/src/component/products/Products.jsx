import React, { useEffect, useState } from "react";
import { getEmployees} from '../../api/employes';  
import Card from "./Card";  

const EmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await getEmployees();
      setEmployees(result);
    };

    fetchEmployees();
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-y-[30px] gap-x-[52px]">
        {employees.map((employee, index) => (
          <Card key={index} employee={employee} />
        ))}
    </section>
  );
};

export default EmployeeComponent;
