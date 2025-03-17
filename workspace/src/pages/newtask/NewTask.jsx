import React, { useState, useEffect } from "react";
import { departaments } from "../../api/departaments";
import { priorities } from "../../api/priorities";
import { statusApi } from "../../api/status";
import down from "./down.svg";
import "../../reset.css";

const NewTask = () => {
  const [departments, setDepartments] = useState([]);
  const [prioritiesList, setPrioritiesList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("აირჩიეთ დეპარტამენტი");
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [showPriorities, setShowPriorities] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    departaments()
      .then(setDepartments)
      .catch((error) => console.error(error));
  }, []);

  function fetchPriorities() {
    priorities()
      .then((data) => setPrioritiesList(data))
      .catch((error) => console.error(error));
  }

  function handlePriorityChange(priority) {
    setSelectedPriorities((prev) =>
      prev.includes(priority) ? prev.filter((p) => p !== priority) : [...prev, priority]
    );
  }

  function handlePriorities() {
    setShowPriorities((prev) => !prev);
    if (!showPriorities) {
      fetchPriorities();
    }
  }

  useEffect(() => {
    statusApi()
      .then((data) => setStatusList(data)) 
      .catch((error) => console.error(error));
  }, []);

  function handleStatusChange(status) {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  }

  function handleStatus() {
    setShowStatus((prev) => !prev);
    if (!showStatus) {
      statusApi()
    }
  }

  return (
    <section className="flex flex-col gap-y-[25px] px-[118px] mb-[386px]">
      <h3 className="text-[34px] text-left">შექმენი ახალი დავალება</h3>
      <section className="flex flex-col items-center bg-white shadow-md rounded-lg w-[1440px] mx-auto">
        <form className="flex flex-col gap-y-[55px]">
          <article className="flex gap-x-[161px]">
            <article className="flex flex-col w-[550px]">
              <label className="text-left text-gray-700 mb-1">სათაური *</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="შეიყვანე სათაური"
              />
            </article>

            <article className="flex flex-col w-[550px] relative">
              <label className="text-left text-gray-700 mb-1">დეპარტამენტი*</label>
              <section
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-[45px] border border-solid border-gray-300 rounded-md flex justify-between items-center p-2 cursor-pointer"
              >
                <article className="text-gray-500">{selectedDepartment}</article>
                <img src={down} />
              </section>

              {dropdownOpen && (
                <section className="w-[500px] border flex flex-col gap-y-[10px] border-gray-300 rounded-md bg-white shadow-md absolute top-[100px] left-0 z-10">
                  {departments.map((dep) => (
                    <article
                      key={dep.id}
                      onClick={() => {
                        setSelectedDepartment(dep.name);
                        setDropdownOpen(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer drop-shadow-sm"
                    >
                      {dep.name}
                    </article>
                  ))}
                </section>
              )}
            </article>
          </article>

          <article className="flex justify-between w-full">
            <article className="flex flex-col w-[550px] h-[133px]">
              <label className="text-left text-gray-700 mb-1">აღწერა*</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md h-24 resize-none"
                placeholder="შეიყვანე აღწერა"
              ></textarea>
            </article>
            <article className="flex flex-col w-[550px] h-[45px]">
              <label className="text-left text-gray-700 mb-1">პასუხისმგებელი თანამშრომელი*</label>
              <select className="p-2 border border-gray-300 rounded-md">
                <option>აირჩიეთ</option>
                <option>გასაკეთებელი</option>
                <option>დასრულებული</option>
              </select>
            </article>
          </article>

          <article className="flex justify-between w-full">
            <article className="flex gap-x-8">
              <article className="flex flex-col relative">
                <label className="text-gray-700 mb-1">პრიორიტეტი*</label>
                <section
                  onClick={handlePriorities}
                  className="w-[259px] h-[45px] border border-solid border-gray-300 rounded-md flex justify-between items-center p-2 cursor-pointer"
                >
                  {selectedPriorities.length > 0
                    ? selectedPriorities.join(", ")
                    : "აირჩიეთ"}
                  <img src={down} />
                </section>

                {showPriorities && (
                  <section className="absolute top-[100px] left-0 border border-gray-300 rounded-md bg-white shadow-md w-[259px] z-10 p-2">
                    {prioritiesList.map((priority) => (
                      <label key={priority.id} className="flex items-center gap-2 p-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedPriorities.includes(priority.name)}
                          onChange={() => handlePriorityChange(priority.name)}
                          className="w-5 h-5 accent-blue-500"
                        />
                        {priority.name}
                      </label>
                    ))}
                  </section>
                )}
              </article>

              <article className="flex flex-col relative">
                <label className="text-gray-700 mb-1">სტატუსი*</label>
                <section
                  onClick={handleStatus}
                  className="w-[259px] h-[45px] border border-solid border-gray-300 rounded-md flex justify-between items-center p-2 cursor-pointer"
                >
                  {selectedStatus.length > 0
                    ? selectedStatus.join(", ")
                    : "აირჩიეთ"}
                  <img src={down} />
                </section>

                {showStatus && (
                  <section className="absolute top-[100px] left-0 border border-gray-300 rounded-md bg-white shadow-md w-[259px] z-10 p-2">
                    {statusList.map((status) => (
                      <label key={status.id} className="flex items-center gap-2 p-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedStatus.includes(status.name)}
                          onChange={() => handleStatusChange(status.name)}
                          className="w-5 h-5 accent-blue-500"
                        />
                        {status.name}
                      </label>
                    ))}
                  </section>
                )}
              </article>
            </article>

            <article className="flex flex-col">
              <label className="text-gray-700 mb-1">დედლაინი</label>
              <input
                type="date"
                className="w-[318px] h-[45px] border border-gray-300 rounded-md"
              />
            </article>
          </article>

          <article className="flex justify-end">
            <button className="w-[208px] bg-purple-600 text-white px-6 py-2 rounded-md mt-[145px] mb-[216px]">
              დავალების შექმნა
            </button>
          </article>
        </form>
      </section>
    </section>
  );
};

export default NewTask;

