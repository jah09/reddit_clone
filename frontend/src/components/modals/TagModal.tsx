import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

interface TagModalProps {
  onClose: () => void;
}
function TagModal({ onClose }: TagModalProps) {
  //modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  function closeModal() {
    setModalIsOpen(false);
    onClose();
  }

  return (
    <div className="overflow-y-auto sm:p-0   pr-4 pl-4  ">
      <Modal
        appElement={document.getElementById("root")}
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-[#181c1f] h-auto rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-8 sm:align-middle sm:max-w-xl sm:w-full mt-14">
          <div className="flex ">
            <div className="flex flex-1 flex-col ">
              <h1 className="text-foreground font-bold text-2xl">Add tags</h1>
              <p className="text-foreground mt-4">r/SubbName flair</p>
            </div>
            <div
              className="flex place-items-center  bg-[#2a3236] w-8 h-8 rounded-full "
              onClick={closeModal}
            >
              <IoCloseOutline className=" w-8 h-8  cursor-pointer text-white" />
            </div>
          </div>
          <div className="mt-4 ">
            <div className="justify-center flex  relative items-center mr-2">
              <div className="  absolute left-0 px-3">
                <IoSearchOutline className="w-6 h-6 text-white" />
              </div>
              <input
                className="rounded-full px-11 text-foreground focus:outline-none min-w-[500px]  bg-[#2a3236] py-2"
                type="text"
                placeholder="Search Reddit"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center py-1">
              <input
                className="w-4 h-4"
                type="radio"
                name="noFlare"
                id="noFlare"
                value="No flare"
              />
              <label htmlFor="noFlare" className="px-6 text-foreground">
                No flare
              </label>
            </div>
            <div className="flex items-center py-1">
              <input
                className="w-4 h-4"
                type="radio"
                name="noFlare"
                id="noFlare"
                value="No flare"
              />
              <label
                htmlFor="noFlare"
                className="px-2 text-black bg-blue-500 rounded-full py-1 ml-4 "
              >
                Pahungaw
              </label>
            </div>
          </div>
          <div className="mt-12  ">
            <div className="flex justify-end">
              <button
                className="bg-[#2a3236] py-2 px-3 rounded-full font-medium text-foreground mr-2"
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
                //     ? "bg-[#24282a] py-2 px-4 rounded-full font-medium text-foreground mr-2 cursor-no-drop"
                //     : "bg-blue-600 py-2 px-4 rounded-full font-medium text-foreground mr-2"
                // }
                className="bg-[#2a3236] py-2 px-4 rounded-full font-medium text-foreground mr-2  "
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
