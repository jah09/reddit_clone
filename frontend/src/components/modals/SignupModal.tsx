import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as signUpAPI from "@/services/user";
import { IoCloseOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { generateUsername } from "unique-username-generator";
import Modal from "react-modal";
import axios, { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { setCookie } from "@/utilities/cookie/cookie.ts";
import { ExecException } from "child_process";
import { execPath } from "process";
interface User {
  username: string;
  password: string;
  karma: number;
  displayname: string;
}
function SignupModal() {
  //--state--
  const username = generateUsername(); //generate a unique display name
  const [formData, setFormData] = useState<User>({
    username: "",
    password: "",
    karma: 0,
    displayname: username,
  }); //formdata for the USER object
  const [isLoading, setIsLoading] = useState<boolean>(false); //state to hold for loading
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false); //showing the password
  const [type, setType] = useState<string>("password");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true); //for modal open
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  //--event handler--
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
  };
  //get the data input by the user
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
  //generate new display name
  const generateNewDisplayName = () => {
    const newDisplayName = generateUsername();
    setFormData((prevData) => ({
      ...prevData,
      displayname: newDisplayName,
    }));
  };
  //submit the form
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await signUpAPI.signUp(formData);
      setIsLoading(false);

      if (response.statusCode == 201) {
        alert(response.message);
      }

      navigate("/login");
      setModalIsOpen(false);
      setFormData({ username: "", password: "", karma: 0, displayname: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.statusCode === 409) {
          setError(error.response.data.message);
        } else {
          alert("Network error or server issue. Please try again later.");
        }
      }
    }
  };

  return (
    <div className="overflow-y-auto sm:p-0 pt-2 pr-4 pb-20 pl-4">
      <Modal
        appElement={document.getElementById("root")}
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl "
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-background-secondary min-h-full rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-8 sm:align-middle sm:max-w-xl sm:w-full mt-7">
          <div className="flex  bg-inherit">
            <div className="flex flex-1 bg-inherit "></div>
            <div
              className="flex  items-center bg-background-secondary w-8 h-8 rounded-full "
              onClick={closeModal}
            >
              <IoCloseOutline className=" w-8 h-8  cursor-pointer text-neutral rounded-full bg-background-secondary-hover" />
            </div>
          </div>
          <div className="mt-4 px-12 bg-inherit">
            <h1 className="text-2xl font-semibold leading-6 text-text-primary bg-inherit">
              Sign Up
            </h1>
            <p className="py-4 text-text-primary text-sm bg-inherit">
              By continuing, you agree to our{" "}
              <span className="text-secondary-accent bg-inherit">
                User Agreement
              </span>{" "}
              and acknowledge that you understand the{" "}
              <span className="text-secondary-accent bg-inherit">
                Privacy Policy
              </span>
              .
            </p>
            <div className="mt-8 bg-inherit">
              <form
                action=" "
                onSubmit={handleFormSubmit}
                className="bg-inherit"
              >
                <input
                  value={formData.username}
                  type="text"
                  required
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={handleInputChange}
                  className="px-4 py-4 rounded-3xl w-full outline-none text-text-primary focus-visible:ring-offset-0 focus-visible:ring-0 bg-background-primary"
                />
                <div className="mt-3  bg-inherit  relative">
                  <input
                    value={formData.password}
                    type={type}
                    name="password"
                    id="password"
                    required
                    placeholder="Password"
                    onChange={handleInputChange}
                    className="px-4 py-4 rounded-3xl w-full outline-none text-text-primary focus-visible:ring-offset-0 focus-visible:ring-0  bg-background-primary"
                  />{" "}
                  <span onClick={handleShowPassword}>
                    {isPasswordShow ? (
                      <IoMdEye
                        className="w-6 h-6 mr-2 mx-1 cursor-pointer absolute right-1 top-3"
                        color="#6B7280"
                      />
                    ) : (
                      <IoMdEyeOff
                        className="w-6 h-6 mr-2 mx-1 cursor-pointer absolute right-1 top-3"
                        color="#6B7280"
                      />
                    )}
                  </span>
                </div>
                <div className="relative mt-3  bg-inherit">
                  <button onClick={generateNewDisplayName} type="submit">
                    <GrPowerReset
                      className="w-6 h-6 mr-2 mx-1 cursor-pointer absolute right-1 top-3"
                      color="#70757a"
                    />
                  </button>
                  <input
                    required
                    value={formData.displayname}
                    type="text"
                    name="displayname"
                    id="displayname"
                    placeholder="Display Name"
                    onChange={handleInputChange}
                    className="px-4 py-4 rounded-3xl w-full outline-none text-text-primary focus-visible:ring-offset-0 focus-visible:ring-0  bg-background-primary"
                  />
                </div>
                <div className="bg-inherit mt-4">
                  {error && (
                    <p className="bg-inherit text-red-500">{error} *</p>
                  )}
                </div>
                <p className="text-primary mt-10  bg-inherit text-text-secondary">
                  Already have an account?
                  <Link to="/login" className=" bg-inherit">
                    <span className="text-secondary-accent cursor-pointer  bg-inherit">
                      {" "}
                      Login
                    </span>
                  </Link>
                </p>
                <div className=" bg-inherit ">
                  <button
                    type="submit"
                    className="p-4 rounded-3xl w-full outline-none mt-10 bg-primary-accent cursor-pointer text-text-primary  tracking-wide font-medium flex items-center justify-center"
                  >
                    {" "}
                    {isLoading && (
                      <svg
                        aria-hidden="true"
                        className="  w-5 h-5 mr-3 text-sky-200 animate-spin fill-gray-700 bg-inherit"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    )}
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SignupModal;
