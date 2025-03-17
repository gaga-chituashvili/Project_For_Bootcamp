import React, { useState, useEffect } from "react";
import { departaments } from "../../api/departaments";
import down from "./down.svg"
import "../../reset.css";

const NewTask = () => {
  const [departments, setDepartments] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("აირჩიეთ დეპარტამენტი");

  useEffect(() => {
    departaments()
      .then(setDepartments)
      .catch((error) => console.error(error));
  }, []);

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

            <article className="flex flex-col w-[550px]">
              <label className="text-left text-gray-700 mb-1">დეპარტამენტი*</label>
              <section
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-[45px] border border-solid border-gray-300 rounded-md flex justify-between items-center p-2 cursor-pointer"
              >
                <article className="text-gray-500">{selectedDepartment}</article>
                <img className="" src={down} />
              </section>

              {dropdownOpen && (
                <section className="border border-gray-300 rounded-md bg-white shadow-md">
                  {departments.map((dep) => (
                    <article
                      key={dep.id}
                      onClick={() => {
                        setSelectedDepartment(dep.name);
                        setDropdownOpen(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
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
              <article className="flex flex-col">
                <label className="text-gray-700 mb-1">პრიორიტეტი*</label>
                <select className="p-2 border border-gray-300 rounded-md w-[259px] h-[45px]">
                  <option>აირჩიეთ</option>
                  <option>გასაკეთებელი</option>
                  <option>დასრულებული</option>
                </select>
              </article>
              <article className="flex flex-col">
                <label className="text-gray-700 mb-1">სტატუსი*</label>
                <select className="p-2 border border-gray-300 rounded-md w-[259px] h-[45px]">
                  <option>აირჩიეთ</option>
                  <option>დეპარტამენტი 1</option>
                  <option>დეპარტამენტი 2</option>
                </select>
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
