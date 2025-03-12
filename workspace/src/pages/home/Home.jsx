import React, { useEffect, useState } from "react";
import { statusApi } from "../../api/status";
import direction from "../home/direction.svg"
import Products from "../../component/products/Products"

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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




  return (
    <section className="flex flex-col  gap-y-[52px]">
      <section className="flex pl-[118px]">
        <h3>დავალებების გვერდი</h3>
      </section>
      <section className="flex justify-center gap-x-[52px]  border border-solid border-black w-[688px] ">
        <article className="flex gap-x-[8px]">
          <h4>დეპარტამენტი</h4>
          <img src={direction}/>
          </article>
          <article className="flex gap-x-[8px]">
         <h4>პრიორიტეტი</h4>
         <img src={direction}/>
         </article>
         <article className="flex gap-x-[8px]">
          <h4>თანამშრომელი</h4>
          <img src={direction}/>
          </article>
      </section>
      <section className="list">
        <article className="flex gap-x-[52px] justify-center">
        {data.map((item, index) => (
          <article className="w-[371px] border border-solid border-black px-[137px] py-[15px] text-20px flex justify-center items-center" key={index}>{item.name}</article>
        ))}
        </article>
       <Products/>
      </section>
    </section>
  );
};

export default Home;
