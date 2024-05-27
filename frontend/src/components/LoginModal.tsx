import React from 'react'
import Link from 'react-router-dom'
function LoginModal() {
  return (
    <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4  bg-background bg-opacity-50 inset-0 backdrop-blur-sm">
      <div className="flex justify-center items-end text-center min-h-screen sm:block ">
        <div className="bg-[var(--background-light)] transition-opacity bg-opacity-75"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          ​
        </span>
        {/* bg-[#181c1f] */}
        <div className="inline-block text-left bg-gray-500  rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div className="">x</div>
          <div className="mt-4">
            {" "}
            <h1 className="text-xl font-medium leading-6">Login</h1>{" "}
            <p>
              By continuing, you agree to our User Agreement and acknowledge
              that you understand the Privacy Policy.
            </p>
            <div className="mt-8">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="p-4 rounded-2xl w-full outline-none"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="p-4 rounded-2xl w-full outline-none mt-4"
              />
              <p className="text-blue-600 py-4">Forgot password?</p>
              <p className="text-foreground">
                New to Reddit?<Link to="/signup"> <span className="text-blue-600 cursor-pointer">Sign Up</span> </Link>
              </p>

              <button className="p-4 rounded-2xl w-full outline-none mt-10 bg-gray-600 cursor-pointer">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal
