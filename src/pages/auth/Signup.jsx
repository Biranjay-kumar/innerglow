import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";

const backendUrl = import.meta.env.VITE_SERVER;

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    if (
      month < birthDate.getMonth() ||
      (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dobParts = dob.split("-");
    if (dobParts.length !== 3) {
      setError("Invalid date format. Please use dd-mm-yyyy.");
      notifyError("Invalid date format. Please use dd-mm-yyyy.");
      return;
    }

    // Reformat to dd/mm/yyyy
    const formattedDob = `${dobParts[2]}/${dobParts[1]}/${dobParts[0]}`;

    const age = calculateAge(formattedDob);

    // Basic validation
    if (age < 18 || age > 65) {
      setError("Age should be between 18 and 65.");
      notifyError("Age should be between 18 and 65.");
      return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      notifyError("Please enter a valid email.");
      return;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      notifyError("Password should be at least 6 characters long.");
      return;
    }

    setError(""); // Clear error if everything is valid

    // Prepare data for the backend
    const userData = {
      name,
      email,
      dob: formattedDob, // Send formatted dob
      password,
    };

    try {
      // Make API call to backend for user registration (using axios)
      console.log("Backend URL:", backendUrl);
      console.log("User Data:", userData);

      const response = await axios.post(`${backendUrl}/user/`, userData);
      console.log("API Response:", response);

      if (response.data.success) {
        notifySuccess("Sign up successful!");
        // Redirect to OTP page after successful sign-up
        navigate("/otp");
      } else {
        setError("Sign up failed. Please try again.");
        notifyError("Sign up failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      notifyError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-yellow-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-semibold text-center text-violet-600 mb-6">
            Sign In
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition duration-300"
            >
              Sign In
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Don't have an account?
                <a
                  href="/signup"
                  className="text-violet-600 font-semibold hover:underline"
                >
                  {" "}
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
