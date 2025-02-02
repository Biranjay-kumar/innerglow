// src/pages/Classes.js
import React from "react";

const Classes = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Our Yoga Classes</h1>
        <p className="text-lg mb-4">We offer a variety of yoga classes for all levels:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Beginner Yoga</h2>
            <p className="mt-2 text-gray-700">A gentle introduction to yoga, ideal for those new to the practice.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Vinyasa Flow</h2>
            <p className="mt-2 text-gray-700">A dynamic class linking breath and movement in a fluid sequence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Power Yoga</h2>
            <p className="mt-2 text-gray-700">A faster-paced class to build strength and flexibility.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600">Meditation & Yoga Nidra</h2>
            <p className="mt-2 text-gray-700">Relax deeply with meditation and guided relaxation techniques.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
