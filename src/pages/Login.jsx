import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token":localStorage.getItem('token')
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('data: ', data);
      if (response.ok) {
        console.log("Login successful", data);
        navigate("/"); 
        localStorage.setItem('token',data?.token)
      } else {
        console.error("Login failed", data);
        toast.error('something went wrong');
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error('might some issue from network');
    }
  };

  return (
    <div className="font-[sans-serif] text-[#333] flex items-center justify-center md:h-screen">
      <ToastContainer />
      <div className="w-full h-full flex items-center justify-center my-auto">
        <div className="w-full">
          <h3 className="text-4xl font-bold text-center py-8">Waqq.ly</h3>
          <form
            className="max-w-xl w-full mx-auto bg-[#f3f3f3]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="pb-12">
              <h3 className="text-lg font-semibold text-center pt-8">
                Good to see you again
              </h3>
            </div>
            <div className="max-w-md w-full mx-auto">
              <label htmlFor="email" className="">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  id="email"
                  type="email"
                  required
                  className="w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mt-8 max-w-md w-full mx-auto">
              <label htmlFor="password" className="">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm bg-[#d9d9d9] px-2 py-3 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-6 w-full flex items-center">
              <button
                type="button"
                onClick={handleLogin}
                className="hover:shadow-xl transition-all py-3 px-10 max-w-sm mx-auto text-sm font-semibold bg-[#d9d9d9] focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-between gap-2 py-6 max-w-md w-full mx-auto">
              <div className="flex">
                <Link to="#!" className="block text-sm">
                  Don't have account?
                </Link>
              </div>
              <div>
                <Link to="#!" className="text-sm hover:underline">
                  Forgot your Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
