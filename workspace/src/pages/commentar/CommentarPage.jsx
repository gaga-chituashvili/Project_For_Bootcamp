import React from "react";
import status from "./status.svg"
import person from "./person.svg"
import calendar from "./calendar.svg"

const CommentarPage = () => {
  return (
    <section className="main_section">
      <section className="top-left_main_section flex flex-col gap-y-[20px] w-[715px]">
        <article className="flex gap-x-[18px]">
          <p>საშუალო</p>
          <p>დიზაინი</p>
        </article>
        <h4>Redberry-ს საიტის ლენდინგის დიზაინი </h4>
        <p>
          მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,
          რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის
          გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული
          ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.
        </p>
      </section>
      <section className="botton_left_section w-[493px] flex flex-col">
        <h5>დავალების დეტალები</h5>
        <article className="status_mzad_testebistvis  flex gap-x-[70px] py-[23px] items-center">
            <article className="status flex gap-x-[6px] items-center">
                <img src={status}/>
                <p>სტატუსი</p>
            </article>
            <p>mazad testebistvis</p>
        </article>
        <article className="flex gap-x-[70px] py-[23px] items-center">
        <article className="flex gap-x-[6px] items-center">
            <img src={person}/>
            <p>თანამშრომელი</p>
        </article>
        <p>elaia bagrationi</p>
        </article>
        <article className="flex gap-x-[70px] py-[23px] items-center">
            <article className="flex gap-x-[6px] items-center">
                <img src={calendar}/>
                <p>დავალების ვადა</p>
            </article>
            18/03/2025
        </article>
      </section>
    </section>
  );
};

export default CommentarPage;
