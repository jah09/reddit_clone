import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

//Structure of the Props
interface TagModalProps {
  onClose: () => void;
}
function TagModal({ onClose }: TagModalProps) {
  //--state--
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);

  //--event handler--
  //close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <div className="overflow-y-auto sm:p-0   pr-4 pl-4  ">
      <Modal
        appElement={document.getElementById("root")}
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-background-secondary h-auto rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-8 sm:align-middle sm:max-w-xl sm:w-full mt-14">
          <div className="flex bg-inherit">
            <div className="flex flex-1 flex-col bg-inherit ">
              <h1 className="text-text-primary font-semibold text-2xl bg-inherit">
                Add flares
              </h1>
              <p className="text-text-primary mt-4 bg-inherit">
                f/ SubbName flair
              </p>
            </div>
            <div
              className="flex place-items-center bg-background-secondary-hover marker: w-8 h-8  rounded-full "
              onClick={closeModal}
            >
              <IoCloseOutline className="bg-inherit w-8 h-8  cursor-pointer text-neutral rounded-full" />
            </div>
          </div>
          <div className="mt-4 bg-inherit">
            <div className="justify-center flex  relative items-center mr-2 bg-inherit">
              <div className="  absolute left-0 px-3 bg-transparent">
                <IoSearchOutline className="w-6 h-6 text-neutral bg-inherit" />
              </div>
              <input
                className="rounded-full px-11  focus:outline-none min-w-[500px]  bg-background-primary text-text-primary py-2"
                type="text"
                placeholder="Search flare"
              />
            </div>
          </div>
          <div className="mt-4  ">
            <div className="flex items-center py-1 bg-background-secondary">
              <input
                className="w-4 h-4"
                type="radio"
                name="noFlare"
                id="noFlare"
                value="No flare"
              />
              <label
                htmlFor="noFlare"
                className="px-6 text-text-primary bg-inherit"
              >
                No flare
              </label>
            </div>
            <div className="flex items-center py-1 bg-background-secondary">
              <input
                className="w-4 h-4"
                type="radio"
                name="noFlare"
                id="noFlare"
                value="No flare"
              />
              <label
                htmlFor="noFlare"
                className="px-2 text-text-primary bg-blue-500 rounded-full py-1 ml-4 "
              >
                Pahungaw
              </label>
            </div>
          </div>
          <div className="mt-12  bg-inherit">
            <div className="flex justify-end bg-inherit">
              <button
                className="bg-neutral py-2 px-3 rounded-full font-medium text-text-primary mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                // disabled={
                //   !formData.name || formData.rules.every((rule) => !rule.value)
                // }
                // className={
                //   !formData.name || formData.rules.every((rule) => !rule.value)
                //     ? "bg-[#24282a] py-2 px-4 rounded-full font-medium text-primary mr-2 cursor-no-drop"
                //     : "bg-blue-600 py-2 px-4 rounded-full font-medium text-primary mr-2"
                // }
                className="bg-primary-accent py-2 px-4 rounded-full font-medium text-text-primary mr-2  "
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TagModal;
