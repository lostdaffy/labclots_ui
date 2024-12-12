import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

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
        user: response.data.data,
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

      set({
        user: response.data.data,
        isAuthenticated: true,
        isLoading: false,
      });

      return response.data.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });

      throw error;
    }
  },

  login: async (labEmail, labPassword) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/User-Login`, {
        labEmail,
        labPassword,
      });

      set({
        isAuthenticated: true,
        user: response.data.data.user,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });

    try {
      const response = await axios.get(`${API_URL}/check-auth`);

      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  logoutUser: async () => {
    set({ isLoading: true, error: null });

    try {
      await axios.post(`${API_URL}/user-logout`);
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },

  addPatient: async (patientName) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/add-patient`, {
        patientName
      });

      set({
        user: response.data.data,
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
  }
}));

export default useAuthStore;
