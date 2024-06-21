import React, { useState, useEffect } from "react";
import profile from "@/assets/profile.jpg";

import Modal from "react-modal";

function CommunityModal() {
  //modals
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);

  return (
    <div className="">
      <Modal
        style={{
          overlay: {
            backgroundColor: "transparent",
          },
        }}
        appElement={document.getElementById("root")}
        className="flex items-center text-center min-h-screen justify-around   bg-transparent  "
        isOpen={modalIsOpen}
      >
        <div className="  text-left  bg-background-secondary h-80 rounded-lg overflow-y-auto align-bottom transition-all transform shadow-2xl py-6 px-2  mr-[27%]   w-80  top-[27%] absolute ">
          <h1 className="text-text-primary text-sm font-medium bg-inherit">Your profile</h1>
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
              <div className="flex mt-2 px-4 gap-x-2 items-center bg-inherit">
                <img
                  src={profile}
                  alt="mousecursor"
                  className="w-9 h-9   rounded-full"
                />
                <div className="mt-1 bg-inherit">
                  <p className="text-sm text-text-primary bg-inherit">r/Ediwow</p>
                  <p className="text-xs text-text-secondary bg-inherit">23 members</p>
                </div>
              </div>
              <div className="flex mt-2 px-4 gap-x-2 items-center bg-inherit">
                <img
                  src={profile}
                  alt="mousecursor"
                  className="w-9 h-9   rounded-full"
                />
                <div className="mt-1 bg-inherit">
                <p className="text-sm text-text-primary bg-inherit">r/Ediwow</p>
                <p className="text-xs text-text-secondary bg-inherit">23 members</p>
                </div>
              </div>
              <div className="flex mt-2 px-4 gap-x-2 items-center bg-inherit">
                <img
                  src={profile}
                  alt="mousecursor"
                  className="w-9 h-9   rounded-full"
                />
                <div className="mt-1 bg-inherit">
                <p className="text-sm text-text-primary bg-inherit">r/Ediwow</p>
                <p className="text-xs text-text-secondary bg-inherit">23 members</p>
                </div>
              </div>
              <div className="flex mt-2 px-4 gap-x-2 items-center bg-inherit">
                <img
                  src={profile}
                  alt="mousecursor"
                  className="w-9 h-9   rounded-full"
                />
                <div className="mt-1 bg-inherit">
                <p className="text-sm text-text-primary bg-inherit">r/Ediwow</p>
                <p className="text-xs text-text-secondary bg-inherit">23 members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </Modal>
    </div>
  );
}

export default CommunityModal;
