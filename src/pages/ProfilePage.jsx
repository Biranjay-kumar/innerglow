import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore"; // Zustand store
import axios from "axios"; // For making HTTP requests
import profileLogo from "../../public/images/profile.png";
import Navbar from "../components/Navbar";

const backendUrl =
  import.meta.env.VITE_SERVER || "http://localhost:5000/v1/api";

const ProfilePage = () => {
  const { user, setUser } = useStore((state) => state);
  const navigate = useNavigate();
  const [batches, setBatches] = useState([]);
  const [newBatch, setNewBatch] = useState(user?.batch || "");
  const [selectedBatchId, setSelectedBatchId] = useState(user?.batchId || null); // Store the batch ID
  const [showConfirmDialog, setShowConfirmDialog] = useState(false); // Show dialog state

  // Fetch batches from API
  useEffect(() => {
    if (!user) {
      navigate("/signin");
      return;
    }

    axios
      .get(`${backendUrl}/batch/`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        setBatches(Array.isArray(response.data.data) ? response.data.data : []);
      })
      .catch((error) => {
        console.error("Error fetching batches:", error);
      });

    if (!user.batch) {
      setNewBatch(""); // Allow the user to create/select a batch
    }
  }, [user, navigate]);

  // Handle batch selection
  const handleBatchChange = (selectedBatch) => {
    setNewBatch(selectedBatch.name);
    setSelectedBatchId(selectedBatch._id);
  };

  // Show confirmation dialog
  const handleChangeSlot = () => {
    if (!selectedBatchId) {
      alert("Please select a batch first.");
      return;
    }
    setShowConfirmDialog(true);
  };

  // Confirm and update batch
  const confirmChangeSlot = () => {
    const authToken = localStorage.getItem("authToken");

    axios
      .put(
        `${backendUrl}/batch/${selectedBatchId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then(() => {
        // Update user details and persist in localStorage
        const updatedUser = {
          ...user,
          batch: newBatch,
          batchId: selectedBatchId,
        };

        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser)); // Store in localStorage

        setShowConfirmDialog(false);
        alert("Batch updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating batch:", error);
        alert("Failed to update batch.");
        setShowConfirmDialog(false);
      });
  };

  const cancelChangeSlot = () => {
    setShowConfirmDialog(false);
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="text-white text-lg font-semibold">
          Loading Profile...
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar/>
      <div className="min-h-screen from-yellow-100 to-violet-100 flex justify-center items-center p-6">
      <div className="bg-slate-600 p-8 rounded-2xl shadow-2xl max-w-xl w-full text-white backdrop-blur-md bg-opacity-90">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <img
            src={user.profilePicture || profileLogo}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-purple-500 mr-4 shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-gray-400">
              Registered on: {user.registrationDate}
            </p>
          </div>
        </div>

        {/* Current Batch */}
        <div className="mt-4 bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold">
            Current Batch:{" "}
            <span className="text-purple-400">
              {user.batch || "No batch assigned"}
            </span>
          </p>
        </div>

        {/* Change Batch */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Change Batch</h2>
          <div className="relative">
            <select
              value={newBatch}
              onChange={(e) =>
                handleBatchChange(
                  batches.find((batch) => batch.name === e.target.value)
                )
              }
              className="border border-gray-600 p-3 rounded-md w-full bg-gray-900 text-white"
            >
              <option value="">Select a batch</option>
              {batches.map((batch) => (
                <option key={batch._id} value={batch.name}>
                  {batch.name} - {batch.availableSlots} slots
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleChangeSlot}
            className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
          >
            Confirm Change Slot
          </button>
        </div>

        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-75 z-50">
            <div className="bg-gray-800 p-6 rounded-lg text-white">
              <p className="mb-4">
                Are you sure you want to change your batch?
              </p>
              <div className="flex justify-between">
                <button
                  onClick={confirmChangeSlot}
                  className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600"
                >
                  Yes
                </button>
                <button
                  onClick={cancelChangeSlot}
                  className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 shadow-md transition-transform transform hover:scale-105"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
