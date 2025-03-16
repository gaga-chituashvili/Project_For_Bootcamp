import React from "react";
import xmark from "./employes/xmark.svg";

const NewTask = ({ onClose }) => {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
      <img
        className="absolute right-[5px] top-3 cursor-pointer"
        src={xmark}
        alt="Close"
        onClick={onClose}
      />
      <h2 className="text-xl font-semibold mb-4">Momentum</h2>
      <h3 className="text-lg font-medium mb-6">შექმენი ახალი დავალება</h3>
      <form>
        <section className="grid grid-cols-2 gap-6">
          <article className="col-span-2">
            <label className="block text-gray-700 mb-1">სახელი*</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="შეიყვანე სახელი"
            />
          </article>
          <article className="col-span-2">
            <label className="block text-gray-700 mb-1">აღწერა</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none"
              placeholder="შეიყვანე აღწერა"
            ></textarea>
          </article>
          <article>
            <label className="block text-gray-700 mb-1">კატეგორია*</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>აირჩიეთ</option>
              <option>კატეგორია 1</option>
              <option>კატეგორია 2</option>
            </select>
          </article>
          <article>
            <label className="block text-gray-700 mb-1">სტატუსი*</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>აირჩიეთ</option>
              <option>გასაკეთებელი</option>
              <option>დასრულებული</option>
            </select>
          </article>
          <article>
            <label className="block text-gray-700 mb-1">დეპარტამენტი*</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>აირჩიეთ დეპარტამენტი</option>
              <option>დეპარტამენტი 1</option>
              <option>დეპარტამენტი 2</option>
            </select>
          </article>
          <article>
            <label className="block text-gray-700 mb-1">გამოშვების თარიღი</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </article>
        </section>
        <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md">
          დავალების შექმნა
        </button>
      </form>
    </section>
  );
};

export default NewTask;

