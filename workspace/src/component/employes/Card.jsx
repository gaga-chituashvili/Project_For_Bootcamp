import React from "react";
import Comments from "./Comments.svg"
import level from "./level.svg"

const Card = ({ employee }) => {
  const shortname = employee.department.name.split(" ")[0];

  const currentdata =()=>{
    const today= new Date()
    const day=today.getDate()
    const month=today.getMonth() +1
    const years=today.getFullYear()
  
    return `${day}/${month}/${years}`;
    }

  return (
    <article className="flex flex-col w-[381px]  border border-soli gap-y-[28px] border-orange-500 rounded-[15px] py-[20px] px-[30.5px]">
      <article className="flex justify-between">
        <img src={level}/>
        <article className=" bg-orange-500 py-[5px] px-[18.5px] rounded-2xl">
        <p>{shortname}</p>
        </article>
        <p>{currentdata()}</p>
      </article>
      <article className="flex flex-col gap-y-[12px]">
        <article className="flex justify-center gap-x-[10px]">
        <p className="font-bold">{employee.name}</p>
        <p className="font-bold">{employee.surname}</p>
        </article>
      <p>შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს, ნავიგაციას.</p>
      </article>
      <article className="flex justify-between">
        <img className="w-8 rounded-full" src={employee.avatar}/>
      <img src={Comments}/>
      </article>
    </article>
  );
};

export default Card;
