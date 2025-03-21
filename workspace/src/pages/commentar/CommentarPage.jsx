import React, { useState, useEffect } from "react";
import status from "./status.svg";
import person from "./person.svg";
import calendar from "./calendar.svg";
import upload from "./upload.svg";
import { statusApi } from "../../api/status";
import down from "./down.svg";
import { getEmployees } from "../../api/employes";

const CommentarPage = () => {
  const [statuss, setStatuss] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [employees, setEmployees] = useState([]);
  const [showEmployees, setShowEmployees] = useState(false);
  const [selectEmployees, setSelectEmployees] = useState(null);

  useEffect(() => {
    statusApi().then(setStatuss).catch(console.error);
    getEmployees().then(setEmployees).catch(console.error);
  }, []);

  const handleStatusSelect = (statusName) => {
    setSelectedStatus(statusName);
    setShowStatus(false);
  };

  const handleEmployeesSelect = (employees) => {
    setSelectEmployees(employees);
    setShowEmployees(false);
  };

  const shortname = selectEmployees?.department.name?.split(", ")[0] || ""; 

  return (
    <section className="main_section flex px-[120px]">
      <section className="flex flex-col gap-y-[63px]">
        <section className="top-left_main_section flex flex-col gap-y-[20px] ">
          <article className="flex gap-x-[18px]">
            <p>საშუალო</p>
            <span>{shortname}</span>
          </article>
          <h4 className="text-[34px] font-bold text-left">
            Redberry-ს საიტის ლენდინგის დიზაინი
          </h4>
          <p className="text-[18px] text-[#000000] text-left">
            მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,
            რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის
            გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული
            ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.
          </p>
        </section>
        <section className="botton_left_section w-[493px] flex flex-col">
          <h5 className="text-left text-[24px]">დავალების დეტალები</h5>
          <section className="relative">
            <article className=" flex gap-x-[70px] py-[23px] items-center">
              <article className="status flex gap-x-[6px] items-center">
                <img src={status} alt="status" />
                <span>სტატუსი</span>
              </article>
              <span
                className="cursor-pointer flex gap-x-[10px]"
                onClick={() => setShowStatus(!showStatus)}
              >
                {selectedStatus || "აირჩიეთ"}
                <img src={down} alt="down arrow" />
              </span>
              {showStatus && (
                <section className="absolute top-[60px] right-0 border border-gray-300 rounded-md bg-white shadow-md w-[259px] z-10 p-2">
                  {statuss.map((statusItem) => (
                    <label
                      key={statusItem.id}
                      className="flex items-center gap-2 p-2 cursor-pointer"
                      onClick={() => handleStatusSelect(statusItem.name)}
                    >
                      {statusItem.name}
                    </label>
                  ))}
                </section>
              )}
            </article>
            <article className="flex gap-x-[70px] py-[23px] items-center">
              <article className="flex gap-x-[6px] items-center">
                <img src={person} alt="person" />
                <p>თანამშრომელი</p>
              </article>
              <span
                className="cursor-pointer flex gap-x-[10px]"
                onClick={() => setShowEmployees(!showEmployees)}
              >
                {selectEmployees || "აირჩიეთ"}
                <img src={down} alt="down arrow" />
              </span>
              {showEmployees && (
                <section className="absolute top-[120px] right-0 border border-gray-300 rounded-md bg-white shadow-md w-[259px] z-10 p-2">
                  {employees.map((employee) => (
                    <article
                      key={employee.id}
                      className="flex items-center gap-2 p-2 cursor-pointer"
                      onClick={() => handleEmployeesSelect(employee.name)}
                    >
                      {employee.name}
                      <img className="w-[30px] rounded-full" src={employee.avatar} />
                    </article>
                  ))}
                </section>
              )}
            </article>
          </section>
          <article className="flex gap-x-[70px] py-[23px] items-center">
            <article className="flex gap-x-[6px] items-center">
              <img src={calendar} alt="calendar" />
              <p>დავალების ვადა</p>
            </article>
            <input
              type="date"
              className="w-[318px] h-[45px] border border-gray-300 rounded-md"
            />
          </article>
        </section>
      </section>
      <aside className="h-[975px] flex flex-col gap-y-[66px] px-[45px] py-[40px] bg-[#DDD2FF]">
        <article className="relative w-[651px] h-[135px]">
          <textarea
            placeholder="დაწერე კომენტარი"
            className="w-full h-full resize-none pl-[20px] pt-[20px] rounded-[10px] border border-[#ADB5BD]"
          />
          <button className="absolute bottom-2 right-2 w-[155px] h-[35px] bg-[#8338EC] rounded-lg text-white">
            დააკომენტარე
          </button>
        </article>
        <article className="flex gap-x-[7px]">
          <span className="text-[20px] text-left">კომენტარები</span>
          <div className="w-[30px] h-[22px] bg-[#8338EC] rounded-[30px]"></div>
        </article>
        <section className="flex flex-col gap-y-[38px]">
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} alt="upload" />
              <span className="font-bold">ემილია მორგანი</span>
            </article>
            <p className="text-[#343A40]">
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </p>
          </article>
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} alt="upload" />
              <span className="font-bold">ემილია მორგანი</span>
            </article>
            <p className="text-[#343A40]">
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </p>
          </article>
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} alt="upload" />
              <span className="font-bold">ემილია მორგანი</span>
            </article>
            <p className="text-[#343A40]">
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </p>
          </article>
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} alt="upload" />
              <span className="font-bold">ემილია მორგანი</span>
            </article>
            <p className="text-[#343A40]">
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </p>
          </article>
        </section>
      </aside>
    </section>
  );
};

export default CommentarPage;
