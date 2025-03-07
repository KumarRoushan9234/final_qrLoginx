import React, { useState, useEffect } from "react";
import usePartnerStore from "../store/usePartnerStore";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { partner, updateProfile, fetchPartnerProfile } = usePartnerStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    industry: "",
    website: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchPartnerProfile();
    if (partner) {
      setFormData({
        name: partner.name || "",
        email: partner.email || "",
        phone: partner.phone || "",
        address: partner.address || "",
        industry: partner.industry || "",
        website: partner.website || "",
        description: partner.description || "",
      });
    }
  }, [partner, fetchPartnerProfile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(formData);
    navigate("/my-company");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Update Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={formData.name}
          onChange={handleChange}
          className="input-style"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input-style"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-style"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="input-style"
          required
        />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={formData.industry}
          onChange={handleChange}
          className="input-style"
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="input-style"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="input-style"
        ></textarea>
        <button type="submit" className="btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
