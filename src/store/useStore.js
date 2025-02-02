import { create } from "zustand";


// Load user and authToken from localStorage if they exist
const storedUser = JSON.parse(localStorage.getItem('user')) || null;
const storedAuthToken = localStorage.getItem('authToken') || null;

const useStore = create((set) => ({
  user: storedUser, // Initialize from localStorage
  authToken: storedAuthToken, // Initialize from localStorage
  setUser: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData)); // Persist user data in localStorage
    set({ user: userData });
  },
  setAuthToken: (token) => {
    localStorage.setItem('authToken', token); // Persist authToken in localStorage
    set({ authToken: token });
  },
	setPaymentStatus: (status) => {
    set({ paymentStatus: status }); // Set the payment status in the store
  },
  logout: () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
    localStorage.removeItem('authToken'); // Remove authToken from localStorage
    set({ user: null, authToken: null }); // Reset state
  },
}));

export default useStore;
