import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const RegisterPet = () => {
  const location = useLocation();
  console.log('location: ', location?.state);
  const [formData, setFormData] = useState({
    name: location ? location?.state?.name : '',
    email: location ? location?.state?.email : '',
    breed: location ? location?.state?.breed : '',
    age: location ? location?.state?.age : '',
    description: location ? location?.state?.description : '',
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
      const response = await fetch(
        `http://localhost:5000/api/pet/${
          location?.state !== null ? location?.state?._id : ''
        }`,
        {
          method: location?.state !== null ? 'PATCH' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success(`Pet ${location?.state !== null ? 'Updated' : 'Registed'} Successfully`, {
          onClose: <Navigate to={'/pets'} />,
        });
      } else {
        toast.error('something went wrong');
      }
    } catch (error) {
      toast.error('might some issue from network');
    }
  };

  return (
    <div className='font-[sans-serif] text-[#333] flex items-center justify-center'>
      <ToastContainer />
      <div className='w-full h-full'>
        <form
          className='max-w-xl w-full mx-auto bg-[#f3f3f3]'
          onSubmit={handleSubmit}
        >
          <div className='pb-12'>
            <h3 className='text-lg font-semibold text-center pt-8'>
              Register Your Pet
            </h3>
          </div>
          <div className='max-w-md w-full mx-auto'>
            <label htmlFor='name' className=''>
              Name
            </label>
            <div className='relative flex items-center'>
              <input
                name='name'
                id='name'
                type='text'
                required
                value={formData.name}
                onChange={handleChange}
                className='w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none'
                placeholder='Enter Name'
              />
            </div>
          </div>
          <div className='mt-3 max-w-md w-full mx-auto'>
            <label htmlFor='email' className=''>
              Email
            </label>
            <div className='relative flex items-center'>
              <input
                id='email'
                name='email'
                type='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none'
                placeholder='Enter email'
              />
            </div>
          </div>
          <div className='mt-3 max-w-md w-full mx-auto'>
            <label htmlFor='breed' className=''>
              Breed
            </label>
            <div className='relative flex items-center'>
              <input
                id='breed'
                name='breed'
                type='text'
                required
                value={formData.breed}
                onChange={handleChange}
                className='w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none'
                placeholder='Enter breed'
              />
            </div>
          </div>
          <div className='mt-3 max-w-md w-full mx-auto'>
            <label htmlFor='age' className=''>
              Age
            </label>
            <div className='relative flex items-center'>
              <input
                id='age'
                name='age'
                type='text'
                required
                value={formData.age}
                onChange={handleChange}
                className='w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none'
                placeholder='Enter age'
              />
            </div>
          </div>
          <div className='mt-3 max-w-md w-full mx-auto'>
            <label htmlFor='description' className=''>
              Additional details
            </label>
            <div className='relative flex items-center'>
              <textarea
                rows={4}
                id='description'
                name='description'
                type='text'
                required
                value={formData.description}
                onChange={handleChange}
                className='w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none'
                placeholder=''
              />
            </div>
          </div>
          <div className='py-6 w-full flex items-center'>
            <button
              type='submit'
              className='w-full hover:shadow transition-all py-3 px-10 max-w-md mx-auto text-sm font-semibold bg-[#d9d9d9] focus:outline-none'
            >
              Register Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPet;
