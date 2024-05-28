import React, { useState, useRef } from "react";
 
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import close from "../assets/close.svg";
interface FormData {
  username: string;
  password: string;
}
function LoginModal() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
 

  //get the data input by the user
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="overflow-y-auto sm:p-0   pr-4 pl-4  ">
      <div
         
        className="flex justify-center items-end text-center min-h-screen sm:block  "
      >
        <div className="inline-block text-left bg-[#181c1f] min-h-full rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-8 sm:align-middle sm:max-w-xl sm:w-full mt-4">
          <div className="flex  ">
            <div className="flex flex-1  "></div>
            <div className="flex place-items-center  bg-[#2a3236] w-8 h-8 rounded-full ">
              {" "}
              <img
               
                src={close}
                alt="closemodal"
                className="w-6 h-6 mr-2 mx-1 cursor-pointer"
              />{" "}
            </div>
          </div>
          <div className="mt-4 px-12 ">
            {" "}
            <h1 className="text-2xl font-semibold leading-6 text-foreground">
              Login
            </h1>
            <p className="py-4 text-foreground">
              By continuing, you agree to our{" "}
              <span className="text-blue-900">User Agreement</span> and
              acknowledge that you understand the{" "}
              <span className="text-blue-900">Privacy Policy</span>.
            </p>
            <div className="mt-8">
              <form action=" ">
                <Input
                  type="text"
                  autoComplete="off"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  id="username"
                  placeholder="Username"
                  className="px-4 py-7 rounded-3xl w-full outline-none text-foreground focus-visible:ring-offset-0 focus-visible:ring-0"
                />

                <Input
                  type="password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleInputChange}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="px-4 py-7 rounded-3xl w-full outline-none text-foreground focus-visible:ring-offset-0 focus-visible:ring-0 mt-3"
                />
                <p className="text-blue-600  mt-6">Forgot password?</p>
                <p className="text-foreground py-4">
                  New to Reddit?
                  <Link to="/signup">
                    <span className="text-blue-600 cursor-pointer ml-2">
                      Sign Up
                    </span>
                  </Link>
                </p>

                <button className="p-4 rounded-3xl w-full outline-none mt-10 bg-gray-600 cursor-pointer text-foreground  tracking-wide font-medium">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
