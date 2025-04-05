import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  data: null,
  result: [],


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
        error: error.response?.data.user || "Error Signing up",
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

      console.log(response.data.data.user)
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
      console.error("Auth Check Failed:", error);
      set({ error: error?.message || "Auth check failed", isCheckingAuth: false, isAuthenticated: false });
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

  addPatient: async (
    patientName,
    patientAge,
    patientGender,
    patientEmail,
    patientMobile,
    patientAddress,
    consultant,
    sample,
    test,
    amount,
    discount,
    totalAmount
  ) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/add-patient`, {
        patientName,
        patientAge,
        patientGender,
        patientEmail,
        patientMobile,
        patientAddress,
        consultant,
        sample,
        test,
        amount,
        discount,
        totalAmount,
      });

      set({
        patient: response.data.data,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.patient || "Error Signing up",
        isLoading: false,
      });
      throw error;
    }
  },



  addTest: async (testName, testPrice) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/add-test`, {
        testName,
        testPrice,
      });

      set({
        test: response.data.data,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.test || "Error Signing up",
        isLoading: false,
      });
      throw error;
    }
  },


  fetchPatient: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/users/patient/${id}`);
      const patient = response.data.patient;

      set({
        data: patient,
        result: patient.result || [],
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Failed to fetch patient data",
      });
    }
  },

}));

export default useAuthStore;
