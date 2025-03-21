import React from "react";
import status from "./status.svg";
import person from "./person.svg";
import calendar from "./calendar.svg";
import upload from "./upload.svg";

const CommentarPage = () => {
  return (
    <section className="main_section flex px-[120px]">
      <section className="flex flex-col gap-y-[63px]">
        <section className="top-left_main_section flex flex-col gap-y-[20px] ">
          <article className="flex gap-x-[18px]">
            <p>საშუალო</p>
            <p>დიზაინი</p>
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
          <article className="status_mzad_testebistvis  flex gap-x-[70px] py-[23px] items-center">
            <article className="status flex gap-x-[6px] items-center">
              <img src={status} />
              <p>სტატუსი</p>
            </article>
            <p>mazad testebistvis</p>
          </article>
          <article className="flex gap-x-[70px] py-[23px] items-center">
            <article className="flex gap-x-[6px] items-center">
              <img src={person} />
              <p>თანამშრომელი</p>
            </article>
            <p>elaia bagrationi</p>
          </article>
          <article className="flex gap-x-[70px] py-[23px] items-center">
            <article className="flex gap-x-[6px] items-center">
              <img src={calendar} />
              <p>დავალების ვადა</p>
            </article>
            <input
              type="date"
              className="w-[318px] h-[45px] border border-gray-300 rounded-md"
            />
          </article>
        </section>
      </section>
      <aside className="h-[975px] flex flex-col gap-y-[66px]  px-[45px] py-[40px] bg-[#DDD2FF]">
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
          <div className="w-[30px] h-[22px] bg-[#8338EC] rounded-[30px]">
            total
          </div>
        </article>
        <section className="flex flex-col gap-y-[38px]">
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} />
              <span className="font-bold">ემილია მორგანი</span>
            </article>
            <p className="text-[#343A40]">
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </p>
          </article>
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} />
              <span className="font-bold">ემილია მორგანი</span>
            </article>
            <p className="text-[#343A40]">
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </p>
          </article>
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} />
              <span className="font-bold">ემილია მორგანი</span>
            </article>
            <p className="text-[#343A40]">
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </p>
          </article>
          <article className="flex flex-col gap-y-[8px]">
            <article className="flex gap-x-[12px]">
              <img className="w-[38px]" src={upload} />
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
