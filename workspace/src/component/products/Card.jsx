import React from "react";
import Comments from "./Comments.svg"

const Card = ({ employee }) => {
  const shortname = employee.department.name.split(" ")[0];

  return (
    <article className="flex flex-col w-[381px] h-[217px] border border-soli gap-y-[28px] border-orange-500 rounded-[15px] py-[20px] px-[30.5px]">
      <article className="flex justify-between">
        <p>magali</p>
        <article className=" bg-orange-500 py-[5px] px-[18.5px] rounded-2xl">
        <p>{shortname}</p>
        </article>
        <p>time</p>
      </article>
      <article>
      <h6>{employee.name}</h6>
      <h6>{employee.surname}</h6>
      </article>
      <article className="flex justify-between">
        <img className="w-8 rounded-full" src={employee.avatar}/>
      <img src={Comments}/>
      </article>
    </article>
  );
};

export default Card;
