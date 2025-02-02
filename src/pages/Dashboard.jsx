import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../store/useStore"; // Zustand store

const backendUrl = import.meta.env.VITE_SERVER;

const DashboardPage = () => {
  const { user, authToken, setUser, logout, setPaymentStatus } = useStore((state) => state); // Get user, authToken, and Zustand functions
  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(500);
  const [newBatch, setNewBatch] = useState(user?.batch || ""); // Sync batch with Zustand
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !authToken) {
      navigate("/signin"); // Redirect to sign in if not authenticated
    }
  }, [user, authToken, navigate]);

  const handleBatchChange = (selectedBatch) => {
    setNewBatch(selectedBatch);
    setUser({ ...user, batch: selectedBatch }); // Update user in Zustand store
    alert("Batch updated successfully!");
  };

  const handleLogout = () => {
    logout(); // Use Zustand's logout function
    navigate("/signin"); // Redirect after logout
  };

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT50") {
      setDiscountedPrice(250);
      alert("Coupon applied! You get a 50% discount.");
    } else {
      alert("Invalid coupon code.");
    }
  };

  const handlePayment = async () => {
    if (!user || !authToken) {
      alert("User not authenticated");
      return;
    }
    console.log(authToken)

    try {
      const response = await axios.post(
        `${backendUrl}/payment/`,
        {
          email: user.email,
          amount: discountedPrice,
          status: "Success"
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Ensure correct authToken is sent
          },
        }
      );      
      

      if (response.data.success) {
        alert("Payment successful!");
        setPaymentStatus("Success");
        navigate("/profile")
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("An error occurred during payment. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-violet-500">
        <div className="text-center text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-violet-500 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome, {user.name}
        </h1>

        <div className="mb-6">
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700">
            <strong>Current Batch:</strong> {user.batch || "N/A"}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Change Batch</h2>
          <select
            value={newBatch}
            onChange={(e) => handleBatchChange(e.target.value)}
            className="border p-3 rounded-md w-full"
          >
            <option value="6-7AM">6-7 AM</option>
            <option value="7-8AM">7-8 AM</option>
            <option value="8-9AM">8-9 AM</option>
            <option value="5-6PM">5-6 PM</option>
          </select>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Payment Section</h2>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border p-3 rounded-md w-full mb-3"
          />
          <button
            onClick={applyCoupon}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Apply Coupon
          </button>

          <p className="text-lg mt-4">
            Total Amount: <strong>₹{discountedPrice}</strong>
          </p>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-3 mt-4 rounded-md hover:bg-blue-700"
          >
            Pay Now
          </button>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate("/home")} // Navigate to home page
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 shadow-md transition-transform transform hover:scale-105"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/Profile")} // Navigate to pay page
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
