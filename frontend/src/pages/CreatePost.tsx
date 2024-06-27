import React, { useState, useRef, useEffect } from "react";
import r_icon from "@/assets/r_icon.png";
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

import TagModal from "@/components/modals/TagModal";
import CommunityModal from "@/components/modals/CommunityModal";

// Define the structure of a Post object
interface Post {
  title: string;
  subRedditId: number;
  flareId: string;
  body: string;
}

function CreatePost() {
  // --- State ---
  const [formData, setFormData] = useState<Post>({
    body: "",
    title: "",
    subRedditId: 0,
    flareId: "",
  }); //defining the formData for the POST object
  const [selectedCommunityName, setSelectedCommunityName] =
    useState<string>(""); //
  const [isCommunityInputClick, setIsCommunityInputClick] =
    useState<boolean>(false); //clicked the "Select a community" input
  const [showFlareModal, setIsShowFlareModal] = useState<boolean>(false); //show the Flare Modal
  const [showCommunityModal, setIsShowCommunityModal] =
    useState<boolean>(false); //show the Community Modal
  // --- refs ---
  const inputRef = useRef<HTMLInputElement>(null); //reference to "Select a community" input

  // --- event handler ---
  //handle click  of input (select a community)
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setIsCommunityInputClick(true);
    setIsShowCommunityModal(true);
    //after the modal will open, it will back to refocus in the input
    setTimeout(() => {
      inputRef.current?.focus(); // Refocus the input after a short delay
    }, 100);
  };

  //handle form submit of POST object
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form", formData);
  };

  //get the data by the user in the input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //get the data by the user in the textarea fields
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //user select a community from CommunityModal
  const handleCommunitySelect = (selectedCommunity: any) => {
    setFormData((prevData) => ({
      ...prevData,
      subRedditId: selectedCommunity.id,
    }));
    setSelectedCommunityName(selectedCommunity.name);
    setIsShowCommunityModal(false);
  };
  //clear the selected community in the input field
  const handleClearSelectedCommunity = () => {
    setSelectedCommunityName("");
    setTimeout(() => {
      setIsCommunityInputClick(false);
    }, 500);
  };
  return (
    <div className=" ">
      <div className="py-6 px-10">
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-text-primary text-xl tracking-normal">
              Create post
            </h1>
            <h5 className="text-text-primary font-medium mr-[70px]">Drafts</h5>
          </div>
          <form action="" onSubmit={handleFormSubmit} className=" ">
            <div className="py-4  ">
              <div className="relative   w-64 ">
                <div className=" relative left-0 ">
                  {isCommunityInputClick ? (
                    <IoSearchOutline className="text-neutral w-5 h-5 absolute left-3 top-2.5 bg-transparent " />
                  ) : (
                    <img
                      src={r_icon}
                      alt=""
                      className="w-5 h-5 absolute left-3 top-2.5 "
                    />
                  )}
                </div>
                <div>
                  <input
                    ref={inputRef}
                    type="text"
                    readOnly
                    id="subRedditId"
                    onClick={handleInputClick}
                    value={selectedCommunityName}
                    onChange={handleInputChange}
                    name="subRedditId"
                    className={
                      !isCommunityInputClick
                        ? "rounded-full py-2 px-10 outline-none bg-background-secondary text-text-primary placeholder-text-primary  w-64 "
                        : "rounded-full py-2 px-10 outline-none bg-background-secondary text-text-primary placeholdertext-primary   w-72"
                    }
                    placeholder="Select a community"
                  />
                </div>
                <div>
                  {!isCommunityInputClick ? (
                    <IoIosArrowDown className="w-5 h-5 absolute right-3 top-2.5   text-neutral bg-transparent" />
                  ) : (
                    <IoIosCloseCircleOutline
                      className="w-6 h-6 absolute -right-4 top-2   text-neutral bg-transparent cursor-pointer"
                      onClick={handleClearSelectedCommunity}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="   ">
                <ul className="flex gap-x-6">
                  <li className="text-text-primary border-b-[3px] border-secondary-accent ">
                    Text
                  </li>
                  <li className="text-text-primary">Images & Video</li>
                  <li className="text-text-primary">Link</li>
                </ul>
                <div className="py-6 w-[90%]  ">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    autoComplete="off"
                    name="title"
                    id="title"
                    required
                    value={formData.title}
                    placeholder="Title"
                    className="px-4 py-4 rounded-2xl outline-none text-text-primary   focus-visible:ring-0 bg-background   w-full  border border-background-secondary placeholder-text-primary"
                  />

                  <div className="mt-1 flex justify-end ">
                    <p className="text-text-primary mr-2 ">0/300</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className=" ">
                    <button
                      type="button"
                      id="addTagBtn"
                      onClick={() => setIsShowFlareModal(true)}
                      className={
                        selectedCommunityName
                          ? "bg-secondary-accent text-sm text-black py-[5px] px-3 rounded-full"
                          : "bg-neutral text-sm text-black py-[5px] px-3 rounded-full"
                      }
                      disabled={!selectedCommunityName}
                    >
                      Add flare
                    </button>
                  </div>
                  <div className="w-[90%] mt-4">
                    <textarea
                      name="body"
                      id="body"
                      required
                      value={formData.body}
                      onChange={handleTextareaChange}
                      placeholder="Body"
                      className="px-4 py-4 rounded-2xl outline-none text-text-primary   placeholder-text-primary focus-visible:ring-0 bg-background   w-full  border border-gray-500"
                    ></textarea>
                    <div className="flex justify-end gap-x-2 mt-2">
                      <button className="bg-neutral py-2 px-3 rounded-full text-text-primary font-medium">
                        Save draft
                      </button>
                      <button
                        className="bg-primary-accent py-2 px-4 rounded-full text-text-primary font-medium"
                        type="submit"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showFlareModal && (
        <TagModal onClose={() => setIsShowFlareModal(false)} />
      )}
      {showCommunityModal && (
        <div>
          <CommunityModal
            closeCommunityModal={() => setIsShowCommunityModal(false)}
            onCommunitySelect={handleCommunitySelect}
          />
        </div>
      )}
    </div>
  );
}

export default CreatePost;
