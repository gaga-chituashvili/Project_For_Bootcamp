import React, { useEffect, useState } from "react";
import { statusApi } from "../../api/status";
import { departaments } from "../../api/departaments";
import direction from "../home/direction.svg";
import Products from "../../component/products/Products";

const colorPalette = ["#FF5733", "#FF0000", "#FF69B4", "#0000FF"];

const Home = () => {
  const [data, setData] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);

  useEffect(() => {
    setLoading(true);
    statusApi()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleShowDepartments() {
    setShowDepartments(!showDepartments);
    if (!showDepartments) fetchDepartments();
  }

  function fetchDepartments() {
    departaments()
      .then(function (departmentsData) {
        setDepartments(departmentsData);
      })
      .catch(function (error) {
        setError(error);
      });
  }

  return (
    <section className="flex flex-col gap-y-6">
      <section className="flex pl-[118px]">
        <h3 className="text-[34px]">დავალებების გვერდი</h3>
      </section>
      <section className="w-[688px] flex justify-center gap-x-[52px] py-[18.5px] px-[12px] border border-solid border-[#DEE2E6] ">
        <article className="flex gap-x-[8px]" onClick={handleShowDepartments}>
          <h4>დეპარტამენტი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
        <article className="flex gap-x-[8px]">
          <h4>პრიორიტეტი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
        <article className="flex gap-x-[8px]">
          <h4>თანამშრომელი</h4>
          <img className="w-[25px]" src={direction} alt="direction" />
        </article>
      </section>

      {showDepartments && (
        <section className="flex flex-col gap-y-4 border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
          {departments.map((department, index) => (
            <article
              key={index}
              className="w-full text-white border border-black py-3 px-6 text-lg flex justify-center items-center cursor-pointer rounded-lg"
              style={{ backgroundColor: colorPalette[index % colorPalette.length] }}
            >
              {department.name}
            </article>
          ))}
        </section>
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
        <Products />
      </section>
    </section>
  );
};

export default Home;
