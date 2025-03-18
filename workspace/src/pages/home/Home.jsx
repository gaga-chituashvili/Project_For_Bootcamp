import React, { useEffect, useState } from "react";
import { statusApi } from "../../api/status";
import { departaments } from "../../api/departaments";
import { priorities } from "../../api/priorities";
import direction from "../home/direction.svg";
import Employes from "../../component/employes/Employes";
import vector from "./vector.svg";

const colorPalette = ["#FF5733", "#FF0000", "#FF69B4", "#0000FF"];

const Home = () => {
  const [data, setData] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [priorit, setPriorit] = useState([]);
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showPriorities, setShowPriorities] = useState(false);

  useEffect(() => {
    statusApi().then(setData).catch(console.error);
    departaments().then(setDepartments).catch(console.error);
    priorities().then(setPriorit).catch(console.error);
  }, []);

  function handleDepartmentChange(departmentName) {
    setSelectedDepartments((prev) =>
      prev.includes(departmentName)
        ? prev.filter((dep) => dep !== departmentName)
        : [...prev, departmentName]
    );
  }

  function handlePriorityChange(priority) {
    setSelectedPriorities((prev) =>
      prev.includes(priority)
        ? prev.filter((p) => p !== priority)
        : [...prev, priority]
    );
  }

  const filteredData = data.filter((task) => {
    const matchesDepartment =
      selectedDepartments.length === 0 || selectedDepartments.includes(task.department);

    const matchesPriority =
      selectedPriorities.length === 0 || selectedPriorities.includes(task.priority);

    return matchesDepartment && matchesPriority;
  });

  return (
    <section className="flex flex-col gap-y-6">
      <section className="flex pl-[118px]">
        <h3 className="text-[34px]">დავალებების გვერდი</h3>
      </section>

      <section className="w-[688px] flex justify-center gap-x-[52px] py-[18.5px] px-[12px] border border-solid border-[#DEE2E6] ml-[120px]">
        <article className="flex gap-x-[8px]" onClick={() => setShowDepartments(!showDepartments)}>
          <h4>დეპარტამენტი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
        <article className="flex gap-x-[8px]" onClick={() => setShowPriorities(!showPriorities)}>
          <h4>პრიორიტეტი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
        <article className="flex gap-x-[8px]">
          <h4>თანამშრომელი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
      </section>

      {showDepartments && (
        <section className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white w-[400px] absolute z-10 top-[250px]">
          {departments.map((department, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer py-2">
              <article
                className={`w-[22px] h-[22px] flex justify-center items-center border border-solid border-black cursor-pointer ${
                  selectedDepartments.includes(department.name) || "bg-white"
                }`}
                onClick={() => handleDepartmentChange(department.name)}
              >
                {selectedDepartments.includes(department.name) && (
                  <img src={vector} className="w-[16px] h-[16px]" />
                )}
              </article>
              <span>{department.name}</span>
            </label>
          ))}
        </section>
      )}

      {showPriorities && (
        <article className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white w-[400px] absolute z-10 top-[250px] left-[450px] cursor-pointer">
          {priorit.map((priority, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer py-2">
              <article
                className={`w-[22px] h-[22px] flex justify-center items-center border border-solid border-black cursor-pointer ${
                  selectedPriorities.includes(priority.name) ||"bg-white"
                }`}
                onClick={() => handlePriorityChange(priority.name)}
              >
                {selectedPriorities.includes(priority.name) && (
                  <img src={vector} alt="vector" className="w-[16px] h-[16px]" />
                )}
              </article>
              <span>{priority.name}</span>
            </label>
          ))}
        </article>
      )}

      <section className="flex flex-col gap-y-[30px]">
        <article className="flex gap-x-[52px] justify-center">
          {filteredData && (
            filteredData.map((item, index) => (
              <article
                key={index}
                className="w-[371px] text-white border border-solid border-black px-[137px] py-[15px] text-20px flex justify-center items-center cursor-pointer"
                style={{
                  backgroundColor: colorPalette[index % colorPalette.length],
                }}
              >
                {item.name}
              </article>
            ))
          ) 
         }
        </article>
        <Employes Employes={selectedDepartments} />
      </section>
    </section>
  );
};

export default Home;
