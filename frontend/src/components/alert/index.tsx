import React, { useState } from "react";
import Modal from "react-modal";
import { FaRegCircleCheck } from "react-icons/fa6";
interface AlertProps {
  title: string;
  message: string;
  showmodal: boolean;
}
const Alert = ({ title, message, showmodal }: AlertProps) => {
  //--state--
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(showmodal);
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
              <FaRegCircleCheck className="w-20 h-20  bg-white" />
            </div>
            <div className="mt-8 bg-white">
              <h1 className="text-3xl font-semibold  bg-inherit">Login</h1>
              <p className="bg-white text-lg mt-8">message</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Alert;
