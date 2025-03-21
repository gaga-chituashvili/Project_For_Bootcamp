import React from "react";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments.svg";
import "../../reset.css";
import { routes } from "../../constant/route";

const Card = ({ employee, bgColor, priorit, bgPriorit }) => {
  const shortname = employee.department.name.split(" ")[0] || ""; 

  const navigate = useNavigate();

  const currentData = () => {
    const today = new Date();
    return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  };

  return (
    <article className="flex flex-col w-[381px] border border-solid gap-y-[28px] border-orange-500 rounded-[15px] py-[20px] px-[30.5px]">
      <article className="flex justify-between">
        <div
          style={{ backgroundColor: bgPriorit }}
          className="w-[30px] h-[30px] flex justify-center items-center rounded-full"
        >
          {priorit.name || ""}
        </div>
        <article
          style={{ backgroundColor: bgColor }}
          className="px-[18.5px] rounded-2xl flex justify-center items-center"
        >
          <p>{shortname}</p>
        </article>
        <p>{currentData()}</p>
      </article>

      <article className="flex flex-col gap-y-[12px]">
        <article className="flex justify-center gap-x-[10px] font-bold">
          <p>{employee.name}</p>
          <p>{employee.surname}</p>
        </article>
        <p>
          შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს,
          ნავიგაციას.
        </p>
      </article>

      <article className="flex justify-between">
        <img
          className="w-8 rounded-full"
          src={employee.avatar}
          alt={`${employee.name} ${employee.surname} Avatar`} 
        />
        <button
          onClick={() => navigate(routes.commentar)}
          onKeyDown={(e) => e.key === "Enter" && navigate(routes.commentar)}
          tabIndex="0" 
          className="w-8 h-8"
        >
          <img
            src={Comments}
            alt="Comments" 
            className="w-full h-full" 
          />
        </button>
      </article>
    </article>
  );
};

export default Card;
