import { create } from "zustand";

// Load user and authToken from localStorage safely
const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

const useStore = create((set) => ({
  user: loadFromLocalStorage("user"),
  authToken: localStorage.getItem("authToken") || null,
  paymentStatus: null, // Ensure paymentStatus exists in state

  setUser: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData });
  },
  setAuthToken: (token) => {
    localStorage.setItem("authToken", token);
    set({ authToken: token });
  },
  setPaymentStatus: (status) => {
    set({ paymentStatus: status });
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    set({ user: null, authToken: null, paymentStatus: null }); // Reset all state values
  },
}));

export default useStore;
