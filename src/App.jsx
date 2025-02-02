import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SignInPage from "./pages/auth/Signin";
import SignUpPage from "./pages/auth/Signup";
import DashboardPage from "./pages/Dashboard";
import OTPPage from "./components/Otp";
import AdminPanel from "./Admin/AdminPanel";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import { ToastContainer } from 'react-toastify';
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
