import React from "react";
import Navbar from "../components/Navbar";
import FAQSection from "../components/Faqs";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-violet-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <img
          src="../../public/yoga2.jpg"
          alt="Yoga class"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-6">
          Find Your Inner Peace with Yoga
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Join our yoga classes and begin your journey toward well-being.
        </p>
        <a
          href="/signin"
          className="mt-6 inline-block bg-violet-500 text-white py-3 px-6 rounded-md hover:bg-violet-600 transition"
        >
          Join Our Classes
        </a>
      </section>
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 transform transition duration-500 hover:scale-105">
          Why Choose InnerGlow Yoga?
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🧘</span>
            <p>
              <strong>Enhance Flexibility & Strength:</strong> Our expert-led
              sessions help you build a stronger, more flexible body.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🧠</span>
            <p>
              <strong>Reduce Stress & Anxiety:</strong> Breathe, relax, and let
              go with mindful techniques that calm your mind.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🌿</span>
            <p>
              <strong>Boost Energy & Focus:</strong> Feel more energized and
              mentally clear throughout the day.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">💤</span>
            <p>
              <strong>Improve Sleep Quality:</strong> Relaxing yoga sequences
              help you sleep deeper and wake up refreshed.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🤝</span>
            <p>
              <strong>Join a Supportive Community:</strong> Connect with
              like-minded individuals on a journey toward wellness.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">💆</span>
            <p>
              <strong>Enhance Posture & Balance:</strong> Develop better posture
              and stability through targeted exercises.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">❤️</span>
            <p>
              <strong>Strengthen Mind-Body Connection:</strong> Cultivate
              self-awareness and mindfulness in daily life.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🏡</span>
            <p>
              <strong>Accessible Anytime, Anywhere:</strong> Practice at our
              studio or from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
        <img
          src="../../public/yoga3.jpg"
          alt="Yoga practice"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-md mt-6"
        />
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          At InnerGlow, we believe yoga is for everyone. Whether you're a
          beginner or experienced, our sessions cater to your needs.
        </p>
      </section>

      {/* Class Schedule */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Class Schedule</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Morning Flow
            </h3>
            <p className="text-gray-600">Mon - Fri, 7:00 AM - 8:00 AM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Evening Relaxation
            </h3>
            <p className="text-gray-600">Mon - Thu, 6:00 PM - 7:00 PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Weekend Flow
            </h3>
            <p className="text-gray-600">Sat & Sun, 9:00 AM - 10:30 AM</p>
          </div>
        </div>
      </section>
      <FAQSection />
      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p className="text-sm">
          &copy; 2025 InnerGlow Yoga. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
