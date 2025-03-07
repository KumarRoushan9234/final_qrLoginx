import { create } from "zustand";
import { persist } from "zustand/middleware";
import API from "../api/api";

const usePartnerStore = create(
  persist(
    (set) => ({
      partner: null,
      token: localStorage.getItem("partner-token") || null,
      isAuthenticated: !!localStorage.getItem("partner-token"),

      login: async (email, password) => {
        try {
          const { data } = await API.post("/partners/login", {
            email,
            password,
          });
          localStorage.setItem("partner-token", data.token);
          set({
            partner: data.partner,
            token: data.token,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error("Partner login failed", error);
        }
      },

      fetchPartnerProfile: async () => {
        try {
          const { data } = await API.get("/partners/profile");
          set({ partner: data });
        } catch (error) {
          console.error("Failed to fetch partner details:", error);
        }
      },

      updatePartnerProfile: async (profileData) => {
        try {
          const token = localStorage.getItem("partner-token");
          if (!token) return;

          const { data } = await API.put("/partners/profile", profileData, {
            headers: { Authorization: `Bearer ${token}` },
          });

          set({ partner: data.partner });
          return { success: true, message: "Profile updated successfully" };
        } catch (error) {
          console.error("Profile update failed", error);
          return { success: false, message: "Update failed" };
        }
      },

      logout: () => {
        localStorage.removeItem("partner-token");
        set({ partner: null, token: null, isAuthenticated: false });
      },
    }),
    { name: "partner-store" }
  )
);

export default usePartnerStore;
