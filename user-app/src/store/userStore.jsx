import { create } from "zustand";
import { persist } from "zustand/middleware";
import API from "../api/api";
import useAuthStore from "./authStore";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      partners: [],
      checkInStatus: null,

      fetchUserProfile: async () => {
        try {
          const { data } = await API.get("/users/profile");
          set({ user: data.user });
          return { success: true, user: data.user };
        } catch (error) {
          console.error("Error fetching user profile:", error);
          return { success: false, message: "Failed to fetch user profile." };
        }
      },

      fetchAllPartners: async () => {
        try {
          const { data } = await API.get("/users/partners");
          set({ partners: data.partners });
          return { success: true, partners: data.partners };
        } catch (error) {
          console.error("Error fetching partners:", error);
          return { success: false, message: "Failed to fetch partners." };
        }
      },

      submitCheckIn: async (partnerId) => {
        try {
          const { user } = useAuthStore.getState();
          if (!user) {
            console.error("User not authenticated");
            return { success: false, message: "User not authenticated" };
          }

          const response = await API.post("/checkin/submit", {
            userId: user._id,
            partnerId,
          });

          set({ checkInStatus: response.data.message });

          return { success: true, message: response.data.message };
        } catch (error) {
          console.error("Error submitting check-in:", error);
          return { success: false, message: "Failed to submit check-in." };
        }
      },
    }),
    { name: "user-store" }
  )
);

export default useUserStore;
