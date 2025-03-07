import { create } from "zustand";
import { persist } from "zustand/middleware";
import API from "../api/api";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: localStorage.getItem("auth-token") || null,
      isAuthenticated: !!localStorage.getItem("auth-token"),

      login: async (email, password) => {
        try {
          const { data } = await API.post("/auth/login", { email, password });

          localStorage.setItem("auth-token", data.token);
          set({ user: data.user, token: data.token, isAuthenticated: true });

          await get().fetchUserProfile();
        } catch (error) {
          console.error("Login failed", error);
        }
      },

      signup: async (name, email, phone, password) => {
        try {
          const { data } = await API.post("/auth/register", {
            name,
            email,
            phone,
            password,
          });

          return { success: true, message: data.message };
        } catch (error) {
          console.error("Signup failed", error);
          return { success: false, message: "Signup failed!" };
        }
      },

      loginWithGoogle: async () => {
        try {
          const { data } = await API.get("/auth/google");

          const decoded = jwtDecode(data.token);
          localStorage.setItem("auth-token", data.token);
          set({ user: decoded, token: data.token, isAuthenticated: true });

          await get().fetchUserProfile();
        } catch (error) {
          console.error("Google login failed", error);
        }
      },

      logout: () => {
        localStorage.removeItem("auth-token");
        set({ user: null, token: null, isAuthenticated: false });
      },

      fetchUserProfile: async () => {
        try {
          const { data } = await API.get("/users/profile");
          set({ user: data });
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      },

      updateUserProfile: async (formData) => {
        try {
          const { data } = await API.put("/auth/update", formData);
          set({ user: data });

          return { success: true, message: "Profile updated successfully!" };
        } catch (error) {
          console.error("Error updating profile:", error);
          return { success: false, message: "Profile update failed!" };
        }
      },

      changePassword: async (oldPassword, newPassword) => {
        try {
          const { data } = await API.put("/auth/change-password", {
            oldPassword,
            newPassword,
          });

          return { success: true, message: data.message };
        } catch (error) {
          console.error("Error changing password:", error);
          return { success: false, message: "Incorrect old password." };
        }
      },
    }),
    { name: "auth-store" }
  )
);

export default useAuthStore;
