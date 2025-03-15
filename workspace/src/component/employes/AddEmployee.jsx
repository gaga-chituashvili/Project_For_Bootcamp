import React from "react";
import img from "./img.jpg";
import down from "./down.svg";
import xmark from "./xmark.svg"

const AddEmployee = () => {
  return (
    <section className="flex flex-col items-center gap-y-[40px] border border-black p-[56px] w-[600px] bg-white rounded-lg shadow-lg relative">
      <img className="absolute right-[5px] top-3 cursor-pointer" src={xmark}/>
      <h2 className="text-xl font-semibold">თანამშრომლის დამატება</h2>

      <section className="flex gap-x-[48px] w-full">
        <article className="flex flex-col gap-y-[4px] w-1/2">
          <label className="text-sm font-medium">სახელი *</label>
          <input className="w-full h-11 border border-gray-300 rounded-md p-2"/>
          <p className="text-xs text-gray-500">მინიმუმ 2 სიმბოლო</p>
          <p className="text-xs text-gray-500">მინიმუმ 255 სიმბოლო</p>
        </article>
        
        <article className="flex flex-col gap-y-1 w-1/2">
          <label className="text-sm font-medium">გვარი *</label>
          <input className="w-full h-[44px] border border-gray-300 rounded-md p-[4px]"/>
          <p className="text-xs text-gray-500">მინიმუმ 2 სიმბოლო</p>
          <p className="text-xs text-gray-500">მინიმუმ 255 სიმბოლო</p>
        </article>
      </section>
      
      <article className="flex flex-col items-center gap-y-[24px]">
        <p className="text-sm font-medium">ავატარი *</p>
        <img className="w-[64px] h-[64px] rounded-full object-cover" src={img}/>
      </article>
      
      <article className="w-full flex flex-col gap-y-2">
        <p className="text-sm font-medium">დეპარტამენტი *</p>
        <div className="relative w-full h-[44px] border border-gray-300 rounded-md flex items-center p-[8px] cursor-pointer">
          <span className="text-gray-500">აირჩიეთ დეპარტამენტი</span>
          <img className="absolute right-[16px] w-[20px] h-[20px]" src={down}/>
        </div>
      </article>
      
      <article className="flex gap-x-[24px] mt-[24px]">
        <button className="px-[24px] py-[8px] border border-gray-400 rounded-md text-gray-600">გაუქმდა</button>
        <button className="px-[24px] py-[8px] bg-purple-600 text-white rounded-md">დაამატე თანამშრომელი</button>
      </article>
    </section>
  );
};

export default AddEmployee;
