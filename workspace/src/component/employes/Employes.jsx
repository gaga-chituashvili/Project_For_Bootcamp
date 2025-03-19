import React, { useEffect, useState } from "react";
import { getEmployees } from "../../api/employes";
import Card from "./Card";
import { ClimbingBoxLoader } from "react-spinners";
import "../../reset.css";
import { priorities } from "../../api/priorities";

const Employee = ({ Employes }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priorit, setPriorit] = useState([]);

  const colorPatternDepartments = ["#FF0000", "#FF5733", "#a9cec2", "#FD9A6A", "#89B6FF", "#FFD86D", "#fcecb3"];
  const colorPatternPriorities = ["#08A508", "#FFBE0B", "#FA4D4D"];

  useEffect(() => {
    setLoading(true);
    getEmployees()
      .then((employees) => setEmployees(employees))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    priorities()
      .then((data) => setPriorit(data))
      .catch((error) => console.error(error));
  }, []);


  const filteredEmployees =
    Employes.length > 0
      ? employees.filter((emp) => Employes.includes(emp.department.name))
      : employees;

  return (
    <section className="flex flex-col items-center gap-y-[100px]">
      <article className="relative">
      </article>

      <section className="flex flex-wrap justify-center gap-y-[30px] gap-x-[52px] relative">
        {loading && <ClimbingBoxLoader color="#827ec5" size={15} />}
        {filteredEmployees.map((employee, index) => {
          const employeePriority = priorit.find((p) => p.id === employee.priorityId) || {};
          const priorityColor = colorPatternPriorities[employeePriority.level - 1]

          return (
            <Card
              key={employee.id}
              employee={employee}
              priorit={employeePriority}
              bgColor={colorPatternDepartments[index % colorPatternDepartments.length]}
              bgPriorit={priorityColor}
            />
          );
        })}
        {filteredEmployees.length === 0 && !loading && (
          <p className="text-gray-500">No employees found</p>
        )}
      </section>

    </section>
  );
};

export default Employee;
