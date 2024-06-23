import React, { useState, useEffect, useRef } from "react";
import profile from "@/assets/profile.jpg";

import Modal from "react-modal";
interface CommunityModal {
  onClose: () => void;
}
function CommunityModal({ onClose }: CommunityModal) {
  //modals
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);

  const [selectedCommunity, setSelectedCommunity] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCommunity(event.target.value);
    onClose();
    // Optionally, communicate the selected value to the parent component
    // using a callback prop or some other mechanism
  };
  return (
    <div className="" ref={modalRef}>
      <Modal
        style={{
          overlay: {
            backgroundColor: "transparent",
          },
        }}
        appElement={document.getElementById("root")}
        className="flex items-center text-center min-h-screen justify-around   bg-transparent modal-content "
        isOpen={modalIsOpen}
      >
        <div
          className="  text-left  bg-background-secondary h-80 rounded-lg overflow-y-auto align-bottom transition-all transform shadow-2xl py-6 px-2  mr-[27%]   w-80  top-[27%] absolute modal-content "
          ref={modalRef}
        >
          <h1 className="text-text-primary text-sm font-medium bg-inherit">
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
              <select
                name="test1"
                id="test1"
                onChange={handleSelectChange}
                value={selectedCommunity} // Set the selected value
              >
                <option value="test11">test11</option>
                <option value="test12">test12</option>

             
              </select> 
            
            </div>
          </div>
        </div>
        <div></div>
      </Modal>
    </div>
  );
}

export default CommunityModal;
