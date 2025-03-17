import React, { useState, useEffect } from "react";
import down from "./down.svg";
import uploadIcon from "../employes/upload.svg";
import xmark from "./xmark.svg";
import { departaments } from "../../api/departaments";
import "../../reset.css";

const AddEmployee = ({ onClose, onAdd }) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("აირჩიეთ დეპარტამენტი");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    departaments()
      .then(setDepartments)
      .catch((error) => console.error(error));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (name.length < 2 || surname.length < 2 || selectedDepartment === "აირჩიეთ დეპარტამენტი") {
      alert("გთხოვთ, შეავსეთ ყველა ველი.");
      return;
    }

    const newEmployee = {
      name,
      surname,
      avatar: image,
      department: { name: selectedDepartment },
    };

    onAdd(newEmployee);
    onClose();
  };

  return (
    <section className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
      <div className="flex flex-col items-center gap-y-10 border border-black p-14 w-[600px] bg-white rounded-lg shadow-lg relative">
        <img
          className="absolute right-3 top-3 cursor-pointer"
          src={xmark}
          alt="Close"
          onClick={onClose}
        />

        <h2 className="text-xl font-semibold">თანამშრომლის დამატება</h2>

        <section className="flex gap-x-12 w-full">
          <article className="flex flex-col gap-y-1 w-1/2">
            <label className="text-sm font-medium">სახელი *</label>
            <input
              className="w-full h-11 border border-gray-300 rounded-md p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </article>

          <article className="flex flex-col gap-y-1 w-1/2">
            <label className="text-sm font-medium">გვარი *</label>
            <input
              className="w-full h-11 border border-gray-300 rounded-md p-2"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </article>
        </section>

        <article className="flex flex-col items-center gap-y-6">
          <p className="text-sm font-medium">ავატარი *</p>
          <label htmlFor="avatar-upload" className="cursor-pointer">
            <img className="w-16 h-16 rounded-full object-cover" src={image || uploadIcon} alt="Avatar" />
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </article>

        <article className="w-full flex flex-col gap-y-2 relative">
          <p className="text-sm font-medium">დეპარტამენტი *</p>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative w-full h-11 border border-gray-300 rounded-md flex items-center p-2 cursor-pointer"
          >
            <span className="text-gray-500">{selectedDepartment}</span>
            <img className="absolute right-4 w-5 h-5" src={down} alt="Dropdown" />
          </div>

          {dropdownOpen && (
            <section className="absolute w-full border border-gray-300 rounded-md bg-white shadow-md mt-2 z-10">
              {departments.map((dept) => (
                <article
                  key={dept.id}
                  onClick={() => {
                    setSelectedDepartment(dept.name);
                    setDropdownOpen(false);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {dept.name}
                </article>
              ))}
            </section>
          )}
        </article>

        <article className="flex gap-x-6 mt-6">
          <button onClick={onClose} className="px-6 py-2 border border-gray-400 rounded-md text-gray-600">
            გაუქმდა
          </button>
          <button onClick={handleSubmit} className="px-6 py-2 bg-purple-600 text-white rounded-md">
            დაამატე თანამშრომელი
          </button>
        </article>
      </div>
    </section>
  );
};

export default AddEmployee;
