import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-orange-100 flex items-center justify-center">
        <div className="max-w-4xl bg-white p-10 shadow-2xl rounded-3xl text-center border border-gray-200">
          <h1 className="text-5xl font-extrabold text-green-700 mb-6 tracking-wide animate-fadeIn">
            Welcome to InnerGlow
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Discover a sanctuary of peace and mindfulness at **InnerGlow**. We
            guide you on a journey of self-discovery through the art of yoga,
            blending ancient traditions with modern well-being practices.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Whether you’re a beginner or a seasoned yogi, our experienced
            instructors offer classes tailored to your needs. Join us in
            creating harmony between body, mind, and soul.
          </p>

          <div className="flex justify-center space-x-4 mt-6">
            <a href="/classes">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium hover:bg-green-700 transition duration-300">
                Explore Classes
              </button>
            </a>
            <a href="/signin">
              <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full shadow-md text-lg font-medium hover:bg-green-600 hover:text-white transition duration-300">
                Join Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
