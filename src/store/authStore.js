import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users/";

axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  register: async (ownerName, labName, labEmail, labPassword) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/register`, {
        ownerName,
        labName,
        labEmail,
        labPassword,
      });

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.user || "Error Signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (verificationCode) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, {
        verificationCode,
      });

      set({ user: response.data.user, isAuthenticated: true, isLoading: false });
      return response.data

    } catch (error) {
      set({ error: error.response.data.message || "Error verifying email", isLoading: false });

      throw error;
    }
  },

  login: async (labEmail, labPassword) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/User-Login`, {
        labEmail,
        labPassword,
      })

      set({
        isAuthenticated: true,
        user: response.data.data.user,
        error: null,
        isLoading: false
      })

    } catch (error) {
      set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
      throw error;
    }
  }
}));

export default useAuthStore;
