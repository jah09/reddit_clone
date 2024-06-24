import React, { useState, useEffect, useRef } from "react";
import profile from "@/assets/profile.jpg";
import { IoCloseOutline } from "react-icons/io5";
import communityData from "@/data/community";

import Modal from "react-modal";
interface CommunityModal {
  onClose: () => void;
  onCommunitySelect: (selectedCommunity: any) => void;
}
function CommunityModal({ onClose, onCommunitySelect }: CommunityModal) {
  //modals
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const community = communityData(); //community data

  //handle the selected community

  return (
    <div className="">
      <Modal
        style={{
          overlay: {
            backgroundColor: "transparent",
          },
        }}
        appElement={document.getElementById("root")}
        className="flex items-center text-center min-h-screen justify-around   bg-transparent   "
        isOpen={modalIsOpen}
      >
        <div className="  text-left  bg-background-secondary h-80 rounded-lg overflow-y-auto align-bottom transition-all transform shadow-2xl py-2 px-2  mr-[27%]   w-80  top-[27%] absolute modal-content ">
          <div className="flex justify-end bg-inherit">
            <div
              className="flex place-items-center bg-background-secondary-hover  py-2 w-6 h-6  rounded-full "
              onClick={() => onClose()}
            >
              <IoCloseOutline className="bg-inherit w-6 h-6  cursor-pointer text-neutral rounded-full" />
            </div>
          </div>
          <h1 className="text-text-primary text-sm font-medium bg-inherit mt-1">
            Your profile
          </h1>
          <div className="bg-inherit">
            <div className="flex p-4 gap-x-2 items-center bg-inherit">
              <img
                src={profile}
                alt="mousecursor"
                className="w-9 h-9   rounded-full bg-inherit"
              />
              <p className="text-sm text-text-primary bg-inherit">r/Scammaz</p>
            </div>
            <div className="mt-4  bg-inherit ">
              <h1 className="text-text-primary text-sm font-medium bg-inherit">
                Your communities
              </h1>
              {community.map((item) => (
                <div
                  className="flex  my-1  px-4 gap-x-2 items-center bg-inherit hover:bg-background-secondary-hover py-1 rounded-lg cursor-pointer"
                  key={item.id}
                  onClick={() => onCommunitySelect(item)}
                >
                  <img
                    src={profile}
                    alt="mousecursor"
                    className="w-9 h-9   rounded-full"
                  />
                  <div className="mt-1 bg-inherit">
                    <p className="text-sm text-text-primary bg-inherit">
                      r/ {item.name}
                    </p>
                    <p className="text-xs text-text-secondary bg-inherit">
                      {item.members} members
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </Modal>
    </div>
  );
}

export default CommunityModal;
