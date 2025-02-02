import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(""); // To display error messages
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    // Mock API call to verify OTP (replace with actual verification logic)
    if (otp === "123456") {
      // Mock OTP validation
      alert("OTP verified successfully!");
      navigate("/signin"); // Redirect to dashboard or home after verification
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-yellow-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength="6"
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;
