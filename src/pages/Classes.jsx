// src/pages/Classes.js
import React from "react";
import yoga1 from "../../public/images/yoga1.jpg";
import yoga2 from "../../public/images/yoga2.jpg";
import yoga3 from "../../public/images/yoga3.jpg";
import yoga4 from "../../public/images/yoga4.jpg";
import Navbar from "../components/Navbar";

const classes = [
  {
    title: "Beginner Yoga",
    description:
      "A gentle introduction to yoga, ideal for those new to the practice.",
    image: yoga1,
  },
  {
    title: "Vinyasa Flow",
    description:
      "A dynamic sequence linking breath with movement for flexibility and balance.",
    image: yoga2,
  },
  {
    title: "Power Yoga",
    description:
      "A high-energy session to build strength, stamina, and mental resilience.",
    image: yoga3,
  },
  {
    title: "Meditation & Yoga Nidra",
    description:
      "Deep relaxation and guided meditation for inner peace and mindfulness.",
    image: yoga4,
  },
];

const Classes = () => {
  return (
   <>
   <Navbar/>
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-wide">
          Discover Your Yoga Journey
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Find the perfect class to enhance your well-being, balance, and inner
          peace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className="w-full h-56 object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h2 className="text-2xl font-semibold text-white">
                  {classItem.title}
                </h2>
                <p className="text-gray-200 mt-2">{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  );
};

export default Classes;
