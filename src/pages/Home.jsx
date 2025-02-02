// HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-light-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-soft-violet to-serene-blue text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Find Your Inner Peace with Yoga
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Join our yoga classes and begin your journey toward mental and physical well-being.
        </p>
        <a
          href="#admission-form"
          className="bg-soft-coral text-white py-3 px-8 rounded-lg text-xl font-medium hover:bg-serene-blue transition"
        >
          Join Our Classes
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark-slate mb-8">About InnerGlow Yoga</h2>
          <p className="text-lg text-dark-slate mb-6">
            At InnerGlow, we believe that yoga is for everyone. Whether you're a beginner or an experienced practitioner, we offer personalized sessions that cater to your needs.
          </p>
          <p className="text-lg text-dark-slate mb-6">
            Our experienced instructors provide a safe and supportive environment to help you find balance, flexibility, and strength—both in body and mind.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-6 bg-soft-violet">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Ready to Begin Your Yoga Journey?</h2>
          <a
            href="#admission-form"
            className="bg-soft-coral text-white py-3 px-8 rounded-lg text-xl font-medium hover:bg-serene-blue transition"
          >
            Start Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark-slate text-white text-center">
        <p>&copy; 2025 InnerGlow Yoga. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
