import React, { useEffect, useState } from "react";
import { statusApi } from "../../api/status";
import { departaments } from "../../api/departaments";
import { priorities } from "../../api/priorities";
import direction from "../home/direction.svg";
import Employes from "../../component/employes/Employes";

const colorPalette = ["#FF5733", "#FF0000", "#FF69B4", "#0000FF"];

const Home = () => {
  const [data, setData] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [priorit, setPriorit] = useState([]);
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [prioError, setPrioError] = useState("");
  const [showPriorities, setShowPriorities] = useState(false);

  useEffect(() => {
    setLoading(true);
    statusApi()
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  function handleShowDepartments() {
    const newState = !showDepartments;
    setShowDepartments(newState);

    if (newState) {
      fetchDepartments();
    }
  }

  function fetchDepartments() {
    departaments()
      .then((dep) => setDepartments(dep))
      .catch((error) => setError(error));
  }

  function handleDepartmentChange(departmentName) {
    const isSelected = selectedDepartments.includes(departmentName);

    if (isSelected) {
      setSelectedDepartments(
        selectedDepartments.filter((dep) => dep !== departmentName)
      );
    } else {
      setSelectedDepartments([...selectedDepartments, departmentName]);
    }
  }

  function handlePriorities() {
    const newPriorities = !showPriorities;
    setShowPriorities(newPriorities);

    if (newPriorities) {
      fetchPriorities();
    }
  }

  function fetchPriorities() {
    priorities()
      .then((priorit) => setPriorit(priorit))
      .catch((error) => setPrioError(error));
  }

  function handlePriorityChange(priority) {
    const isSelected = selectedPriorities.includes(priority);

    if (isSelected) {
      setSelectedPriorities(
        selectedPriorities.filter((p) => p !== priority)
      );
    } else {
      setSelectedPriorities([...selectedPriorities, priority]);
    }
  }

  return (
    <section className="flex flex-col gap-y-6">
      <section className="flex pl-[118px]">
        <h3 className="text-[34px]">დავალებების გვერდი</h3>
      </section>
      <section className="w-[688px] flex justify-center gap-x-[52px] py-[18.5px] px-[12px] border border-solid border-[#DEE2E6]">
        <article className="flex gap-x-[8px]" onClick={handleShowDepartments}>
          <h4>დეპარტამენტი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
        <article className="flex gap-x-[8px]" onClick={handlePriorities}>
          <h4>პრიორიტეტი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
        <article className="flex gap-x-[8px]">
          <h4>თანამშრომელი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
      </section>

      {showDepartments && (
        <article
          className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white w-[400px] absolute z-10 top-[250px]"
        >
          {departments.map((department, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer py-2">
              <input
                type="checkbox"
                checked={selectedDepartments.includes(department.name)}
                onChange={() => handleDepartmentChange(department.name)}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
              <span>{department.name}</span>
            </label>
          ))}
        </article>
      )}

      {showPriorities && (
        <article
          className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white w-[400px] absolute z-10 top-[250px] left-[450px] cursor-pointer"
        >
          {priorit.map((priority, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer py-2">
              <input
                type="checkbox"
                checked={selectedPriorities.includes(priority.name)}
                onChange={() => handlePriorityChange(priority.name)}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
              <span>{priority.name}</span>
            </label>
          ))}
        </article>
      )}

      <section className="flex flex-col gap-y-[30px]">
        <article className="flex gap-x-[52px] justify-center">
          {data.map((item, index) => (
            <article
              key={index}
              className="w-[371px] text-white border border-solid border-black px-[137px] py-[15px] text-20px flex justify-center items-center cursor-pointer"
              style={{ backgroundColor: colorPalette[index % colorPalette.length] }}
            >
              {item.name}
            </article>
          ))}
        </article>
        <Employes Employes={selectedDepartments} />
      </section>
    </section>
  );
};

export default Home;
