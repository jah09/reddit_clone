import React, { useState } from "react";
import Modal from "react-modal";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import { AlertObject } from "@/components/modals/LoginModal";
import { useNavigate } from "react-router-dom";

interface AlertProps {
  alertData: AlertObject;
  showmodal: boolean;
  onConfirm: () => void;
}
const Alert = ({ alertData, showmodal, onConfirm }: AlertProps) => {
  //deconstruct the object
  const { title, message } = alertData || { title: "", message: "" };

  //--state--
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(showmodal);

  //event handle
  const handleConfirm = () => {
    onConfirm();
  };
  return (
    <div className="overflow-y-auto sm:p-0   pr-4 pl-4  ">
      <Modal
        appElement={document.getElementById("root")}
        className="flex justify-center  items-center h-screen  backdrop-blur-1xl bg-[#00000099]"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-white rounded-md shadow-2xl p-8 w-[39%] h-80">
          <div className=" bg-white flex justify-center flex-col items-center">
            <div>
              {title == "Success" ? (
                <CiCircleCheck className="w-20 h-20  bg-white text-green-600" />
              ) : (
                <CiCircleRemove className="w-20 h-20  bg-white text-red-600" />
              )}
            </div>
            <div className="mt-8  bg-white flex flex-col items-center">
              <h1 className="text-3xl font-semibold  bg-inherit">{title}</h1>
              <p className="bg-white text-lg mt-4">{message}</p>
              <button
                className="text-center bg-primary-accent mt-6 rounded-md w-24 py-3 text-lg text-text-primary font-semibold hover:bg-primary-accent-hover"
                onClick={handleConfirm}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Alert;
