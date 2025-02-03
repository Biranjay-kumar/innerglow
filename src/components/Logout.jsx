import React from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="bg-red-500 text-white px-3 py-3 rounded-lg text-md font-semibold transition duration-300 hover:bg-red-600 hover:scale-105"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
