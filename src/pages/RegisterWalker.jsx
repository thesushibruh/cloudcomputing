import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const RegisterWalker = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: location?location?.state?.name:'',
    email: location?location?.state?.email:'',
    experience: location?location?.state?.experience:'',
    availableTime: location?location?.state?.availableTime:'',
    description: location?location?.state?.description:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/walker/${location?.state?location?.state?._id:''}`, {
        method: location?.state!==null?'PATCH':'POST',
        headers: {
          'Content-Type': 'application/json',
          'token':localStorage.getItem('token')
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`Walker ${location?.state!==null?'Updated':'Added'} Successfully`);
      } else {
        toast.error('somthing went wrong');
      }
    } catch (error) {
      toast.error('might some issue from network');
    }
  };

  return (
    <div className="font-[sans-serif] text-[#333] flex items-center justify-center">
      <ToastContainer />
      <div className="w-full h-full">
        <form className="max-w-xl w-full mx-auto bg-[#f3f3f3]" onSubmit={handleSubmit}>
          <div className="pb-12">
            <h3 className="text-lg font-semibold text-center pt-8">Become A Walker</h3>
          </div>
          <div className="max-w-md w-full mx-auto">
            <label htmlFor="name" className="">
              Name
            </label>
            <div className="relative flex items-center">
              <input
                name="name"
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div className="mt-3 max-w-md w-full mx-auto">
            <label htmlFor="email" className="">
              Email
            </label>
            <div className="relative flex items-center">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="mt-3 max-w-md w-full mx-auto">
            <label htmlFor="experience" className="">
              Experience
            </label>
            <div className="relative flex items-center">
              <input
                id="experience"
                name="experience"
                type="text"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none"
                placeholder="Enter experience"
              />
            </div>
          </div>
          <div className="mt-3 max-w-md w-full mx-auto">
            <label htmlFor="availableTime" className="">
              Available Times
            </label>
            <div className="relative flex items-center">
              <input
                id="availableTime"
                name="availableTime"
                type="text"
                required
                value={formData.availableTime}
                onChange={handleChange}
                className="w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none"
                placeholder="Enter available times"
              />
            </div>
          </div>
          <div className="mt-3 max-w-md w-full mx-auto">
            <label htmlFor="description" className="">
              About Yourself
            </label>
            <div className="relative flex items-center">
              <textarea
                rows={4}
                id="description"
                name="description"
                type="text"
                required
                value={formData.description}
                onChange={handleChange}
                className="w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none"
                placeholder=""
              />
            </div>
          </div>
          <div className="py-6 w-full flex items-center">
            <button
              type="submit"
              className="w-full hover:shadow transition-all py-3 px-10 max-w-md mx-auto text-sm font-semibold bg-[#d9d9d9] focus:outline-none"
            >
              Join Our Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterWalker;
