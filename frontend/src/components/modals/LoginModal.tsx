import React, { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface FormData {
  username: string;
  password: string;
}
function LoginModal() {
  //form
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  //modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [type, setType] = useState<string>("password");
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
  };
  //handle show password
  const handleShowPassword = () => {
    if (type === "password") {
      setIsPasswordShow(true);
      setType("text");
    } else {
      setIsPasswordShow(false);
      setType("password");
    }
  };

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
      <Modal
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-[#181c1f] min-h-full rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-8 sm:align-middle sm:max-w-xl sm:w-full mt-7">
          <div className="flex  ">
            <div className="flex flex-1  "></div>
            <div
              className="flex place-items-center  bg-[#2a3236] w-8 h-8 rounded-full "
              onClick={closeModal}
            >
              <IoCloseOutline className=" w-8 h-8  cursor-pointer text-white" />
            </div>
          </div>
          <div className="mt-4 px-12 ">
            {" "}
            <h1 className="text-2xl font-semibold leading-6 text-primary">
              Login
            </h1>
            <p className="py-4 text-primary">
              By continuing, you agree to our{" "}
              <span className="text-blue-600">User Agreement</span> and
              acknowledge that you understand the{" "}
              <span className="text-blue-600">Privacy Policy</span>.
            </p>
            <div className="mt-8">
              <form action=" ">
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  id="username"
                  placeholder="Username"
                  className="px-4 py-4 rounded-3xl w-full outline-none text-primary focus-visible:ring-offset-0 focus-visible:ring-0 bg-[#2a3236]"
                />

                <div className="mt-3     relative">
                  <input
                    value={formData.password}
                    type={type}
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    className="px-4 py-4 rounded-3xl w-full outline-none text-primary focus-visible:ring-offset-0 focus-visible:ring-0  bg-[#2a3236]"
                  />{" "}
                  <span onClick={handleShowPassword}>
                    {isPasswordShow ? (
                      <IoMdEye
                        className="w-6 h-6 mr-2 mx-1 cursor-pointer absolute right-1 top-3"
                        color="#70757a"
                      />
                    ) : (
                      <IoMdEyeOff
                        className="w-6 h-6 mr-2 mx-1 cursor-pointer absolute right-1 top-3"
                        color="#70757a"
                      />
                    )}
                  </span>
                </div>
                <p className="text-blue-600  mt-6">Forgot password?</p>
                <p className="text-primary py-4">
                  New to Reddit?
                  <Link to="/signup">
                    <span className="text-blue-600 cursor-pointer ml-2">
                      Sign Up
                    </span>
                  </Link>
                </p>

                <button
                  className={
                    !formData.username || !formData.password
                      ? "p-4 rounded-3xl w-full outline-none mt-10  bg-[#24282a]  text-primary  tracking-wide font-medium cursor-no-drop"
                      : "p-4 rounded-3xl w-full outline-none mt-10 bg-[#d93900] cursor-pointer text-primary  tracking-wide font-medium"
                  }
                  disabled={!formData.username || !formData.password}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
