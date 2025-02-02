import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useStore from "../../store/useStore";
import { useState } from "react";

const backendUrl = import.meta.env.VITE_SERVER;

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser, setAuthToken } = useStore(); // Access Zustand store actions

  // Toast notification functions
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      notifyError("Please enter a valid email.");
      return;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      notifyError("Password should be at least 6 characters long.");
      return;
    }

    const userData = { email, password };
    try {
      const response = await axios.post(`${backendUrl}/user/login`, userData);

      if (response.data.success) {
        notifySuccess("Sign in successful!");

        // Set user data and token in Zustand store
        const { data } = response;
        setUser({
          name: data.data.name,
          email: data.data.email,
          dob: data.data.dob,
          _id: data.data._id,
        });
        setAuthToken(data.token); // Set token for authentication

        // Redirect to Profile
        navigate("/Profile");
      } else {
        navigate("/Profile");
        notifyError(response.data.message || "Sign in failed. Try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      notifyError(
        error.response?.data?.message || "An error occurred. Try again."
      );
    }
  };

  return (
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
  );
};

export default SignInPage;
