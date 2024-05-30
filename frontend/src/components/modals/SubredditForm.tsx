import React, { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import close from "../../assets/close.svg";
function SubredditForm() {
  const navigate = useNavigate();
  //modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  function closeModal() {
    setModalIsOpen(false);
    navigate("/");
  }
  return (
    <div className="overflow-y-auto sm:p-0   pr-4 pl-4  ">
      <Modal
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-[#181c1f] min-h-full rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-5 sm:align-middle w-3/5 mt-14">
          <div className="flex ">
            <div className="flex flex-1 flex-col ">
              <h1 className="text-foreground font-bold text-2xl">
                Tell us about your community
              </h1>
              <p className=" w-[80%] text-gray-400">
                A name and description help people understand what your
                community is all about
              </p>
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
          <div className="py-6">
            <div className=" flex justify-between">
              <div className="  w-[55%]">
                <div>
                  <input
                    type="text"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Community name"
                    className="px-4 py-4 rounded-2xl w-full outline-none text-foreground focus-visible:ring-offset-0 focus-visible:ring-0 bg-[#2a3236]"
                  />
                  <p className="flex justify-end mr-4 text-gray-400">0</p>
                </div>
                <div className="py-4">
                  <textarea
                    autoComplete="off"
                    name="description"
                    id="description"
                    placeholder="Description"
                    className="px-4  rounded-2xl w-full outline-none text-foreground focus-visible:ring-offset-0 focus-visible:ring-0 bg-[#2a3236] h-44 flex py-4 resize-none"
                  />
                  <p className="flex justify-end mr-4 text-gray-400">0</p>
                </div>
              </div>
              <div className=" w-[40%]  ">
                <div className="bg-[#181c1f] rounded-2xl p-3 shadow-md shadow-black">
                  <p className="font-medium text-foreground text-xl">
                    r/communityname
                  </p>{" "}
                  <p className="text-gray-400 text-sm">1 member . 1 online</p>
                  <p className="text-gray-100 py-2">
                    Your community description
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10  flex justify-between ">
            <div></div>
            <div className=" ">
              <button
                className="bg-[#2a3236] py-2 px-3 rounded-full font-medium text-foreground mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button className="bg-[#24282a] py-2 px-4 rounded-full font-medium text-foreground mr-2">
                Next
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SubredditForm;
