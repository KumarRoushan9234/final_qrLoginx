import { useEffect, useState, useCallback } from "react";
import useAuthStore from "../store/authStore";

const Profile = () => {
  const { user, fetchUserProfile, updateUserProfile, changePassword } =
    useAuthStore();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showModal, setShowModal] = useState(false);
  const [confirmUpdate, setConfirmUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) fetchUserProfile();
  }, [user, fetchUserProfile]);

  useEffect(() => {
    if (user) setFormData({ name: user.name || "", phone: user.phone || "" });
  }, [user]);

  const handleUpdateProfile = useCallback(async () => {
    setLoading(true);
    const result = await updateUserProfile(formData);
    setMessage({
      type: result.success ? "success" : "error",
      text: result.message,
    });
    setEditMode(false);
    setLoading(false);
  }, [formData, updateUserProfile]);

  const handleChangePassword = useCallback(async () => {
    if (!confirmUpdate) return;

    setLoading(true);
    const result = await changePassword(
      passwords.oldPassword,
      passwords.newPassword
    );
    setMessage({
      type: result.success ? "success" : "error",
      text: result.message,
    });

    setPasswords({ oldPassword: "", newPassword: "" });
    setShowModal(false);
    setConfirmUpdate(false);
    setLoading(false);
  }, [passwords, confirmUpdate, changePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          My Profile
        </h1>

        {message.text && (
          <p
            className={`text-center mb-3 ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              readOnly={!editMode}
              className={`w-full p-2 bg-gray-800 text-white border rounded ${
                editMode ? "border-blue-400" : "border-gray-600"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full p-2 bg-gray-700 text-gray-400 border border-gray-600 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold">Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              readOnly={!editMode}
              className={`w-full p-2 bg-gray-800 text-white border rounded ${
                editMode ? "border-blue-400" : "border-gray-600"
              }`}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          {editMode ? (
            <button
              onClick={handleUpdateProfile}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Change Password
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm border border-gray-700">
            <h2 className="text-xl font-semibold text-white text-center mb-3">
              Change Password
            </h2>

            <input
              type="password"
              placeholder="Old Password"
              value={passwords.oldPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, oldPassword: e.target.value })
              }
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-2"
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
            />

            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <input
                type="checkbox"
                checked={confirmUpdate}
                onChange={() => setConfirmUpdate(!confirmUpdate)}
                className="w-4 h-4"
              />
              <label>I confirm changing my password</label>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleChangePassword}
                className={`px-4 py-2 rounded transition ${
                  confirmUpdate
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!confirmUpdate || loading}
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
