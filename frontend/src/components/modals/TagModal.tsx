import React, { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import close from "../../assets/close.svg";

function TagModal() {
  const navigate = useNavigate();

  //modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  function closeModal() {
    setModalIsOpen(false);
  
  }

  return (
    <div className="overflow-y-auto sm:p-0   pr-4 pl-4  ">
      <Modal
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-[#181c1f] min-h-full rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-8 sm:align-middle sm:max-w-xl sm:w-full mt-14">
          <div className="flex ">
            <div className="flex flex-1 flex-col ">
              <h1 className="text-foreground font-bold text-2xl">
                Add tags
              </h1>
              <p className="text-foreground mt-4">r/SubbName flair</p>
            </div>
            <div
              className="flex place-items-center  bg-[#2a3236] w-8 h-8 rounded-full "
              onClick={closeModal}
            >
              {" "}
              <img
                src={close}
                alt="closemodal"
                className="w-6 h-6 mr-2 mx-1 cursor-pointer"
              />{" "}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TagModal;
