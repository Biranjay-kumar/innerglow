import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-light-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-40 px-6 bg-gradient-to-r from-soft-violet to-serene-blue text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-40"
          style={{ backgroundImage: 'url("/path/to/hero-image.jpg")' }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 transform transition duration-500 hover:scale-105">
            Find Your Inner Peace with Yoga
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join our yoga classes and begin your journey toward mental and
            physical well-being.
          </p>
          <a
            href="/signin"
            className="bg-soft-coral text-white py-4 px-10 rounded-lg text-2xl font-semibold hover:bg-serene-blue transition-all transform hover:scale-105"
          >
            Join Our Classes
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-light-slate to-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-dark-slate mb-8 transform transition duration-500 hover:scale-105">
            About InnerGlow Yoga
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg text-dark-slate opacity-90 leading-relaxed">
              At InnerGlow, we believe yoga is for everyone. Whether you're a
              beginner or an experienced practitioner, our personalized sessions
              cater to your unique needs.
            </p>
            <p className="text-lg text-dark-slate opacity-90 leading-relaxed">
              Our experienced instructors provide a safe and supportive
              environment to help you find balance, flexibility, and
              strength—both in body and mind.
            </p>
          </div>
          <button className="mt-10 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg transform transition duration-500 hover:scale-110 hover:bg-indigo-700">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-soft-violet">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-dark-slate mb-8">
            What Our Students Say
          </h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <p className="text-xl text-dark-slate mb-4">
                "InnerGlow Yoga transformed my life. The instructors are so
                knowledgeable, and the atmosphere is calming. I feel stronger
                and more relaxed than ever."
              </p>
              <p className="text-lg text-dark-slate opacity-80">
                – Emily, Yoga Enthusiast
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl text-dark-slate mb-4">
                "Joining InnerGlow was the best decision I made for my mental
                and physical health. I can't wait to continue my yoga journey."
              </p>
              <p className="text-lg text-dark-slate opacity-80">
                – Alex, New Practitioner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-20 px-6 bg-light-slate">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-dark-slate mb-8">
            Class Schedule
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-slate mb-4">
                Morning Flow
              </h3>
              <p className="text-lg text-dark-slate opacity-80">
                Monday to Friday, 7:00 AM - 8:00 AM
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-slate mb-4">
                Evening Relaxation
              </h3>
              <p className="text-lg text-dark-slate opacity-80">
                Monday to Thursday, 6:00 PM - 7:00 PM
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-slate mb-4">
                Weekend Flow
              </h3>
              <p className="text-lg text-dark-slate opacity-80">
                Saturday and Sunday, 9:00 AM - 10:30 AM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-soft-violet to-serene-blue text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Yoga Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-dark-slate p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">The Benefits of Yoga</h3>
              <p className="text-lg opacity-80">
                Explore the mental and physical benefits of incorporating yoga
                into your life.
              </p>
              <a
                href="/blog/benefits-of-yoga"
                className="text-soft-coral font-semibold mt-4 inline-block hover:text-white transition"
              >
                Read More
              </a>
            </div>
            <div className="bg-dark-slate p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Yoga for Stress Relief
              </h3>
              <p className="text-lg opacity-80">
                Learn how yoga can help alleviate stress and create a sense of
                calm.
              </p>
              <a
                href="/blog/yoga-for-stress-relief"
                className="text-soft-coral font-semibold mt-4 inline-block hover:text-white transition"
              >
                Read More
              </a>
            </div>
            <div className="bg-dark-slate p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Yoga and Flexibility</h3>
              <p className="text-lg opacity-80">
                Discover how yoga can enhance your flexibility and overall
                mobility.
              </p>
              <a
                href="/blog/yoga-and-flexibility"
                className="text-soft-coral font-semibold mt-4 inline-block hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-light-slate to-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-dark-slate mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-dark-slate mb-2">
                What should I bring to my first class?
              </h3>
              <p className="text-lg text-dark-slate opacity-90">
                We recommend bringing a yoga mat, comfortable clothing, and a
                water bottle. We provide all other necessary equipment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-dark-slate mb-2">
                Do I need prior experience in yoga?
              </h3>
              <p className="text-lg text-dark-slate opacity-90">
                Not at all! We offer classes for all levels, from beginners to
                advanced practitioners. Our instructors will guide you through
                each session.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-dark-slate mb-2">
                How can I sign up for a class?
              </h3>
              <p className="text-lg text-dark-slate opacity-90">
                Simply visit our "Join Our Classes" page and choose the class
                that fits your schedule. We'll take care of the rest!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-6 bg-soft-violet shadow-lg transform transition duration-300 hover:scale-105">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-white font-bold mb-6 transform transition duration-500 hover:scale-105">
            Ready to Begin Your Yoga Journey?
          </h2>
          <a
            href="/signin"
            className="bg-soft-coral text-white py-4 px-10 rounded-lg text-2xl font-semibold hover:bg-serene-blue transition-all transform hover:scale-105"
          >
            Start Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-dark-slate text-white text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:text-soft-coral transition-all">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="hover:text-soft-coral transition-all">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="hover:text-soft-coral transition-all">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        <p className="text-sm opacity-80">
          &copy; 2025 InnerGlow Yoga. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
