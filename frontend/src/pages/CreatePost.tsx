import React, { useState, useRef, useEffect } from "react";
import r_icon from "@/assets/r_icon.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import TagModal from "@/components/modals/TagModal";
interface Post {
  title: string;
  subRedditId: string;
  flareId: string;
  body: string;
}
function CreatePost() {
  //defining the formData
  const [formData, setFormData] = useState<Post>({
    body: "",
    title: "",
    subRedditId: "",
    flareId: "",
  });
  const [isCommunityInputClick, setIsCommunityInputClick] =
    useState<boolean>(false);
  const inputRef = useRef(null);
  // manage an event listener for clicks outside the input element (inputRef.current).
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current?.contains(event.target)) {
        setIsCommunityInputClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //modal
  const [showModal, setIsShowModal] = useState<boolean>(false);

  //handle form submit
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form", formData);
  };

  //get the data input by the user handleTextareaChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //get the data input by the user handleTextareaChange
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className=" ">
      <div className="py-6 px-10">
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-[#b7cad4] text-xl tracking-normal">
              Create post
            </h1>
            <h5 className="text-[#b7cad4] font-medium mr-[70px]">Drafts</h5>
          </div>
          <form action="" onSubmit={handleFormSubmit} className=" ">
            <div className="py-4  ">
              <div className="relative   w-64 ">
                <div className=" relative left-0 ">
                  {isCommunityInputClick ? (
                    <IoSearchOutline className="text-foreground w-5 h-5 absolute left-3 top-2.5  " />
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
                    id="subRedditId"
                    onClick={() => setIsCommunityInputClick(true)}
                    value={formData.subRedditId}
                    onChange={handleInputChange}
                    name="subRedditId"
                    className={
                      !isCommunityInputClick
                        ? "rounded-full py-2 px-10 outline-none bg-[#2a3236] text-gray-100 placeholder-slate-50   w-64 "
                        : "rounded-full py-2 px-10 outline-none bg-[#2a3236] text-gray-100 placeholder-slate-50   w-72"
                    }
                    placeholder="Select a community"
                  />
                </div>
                <div>
                  {!isCommunityInputClick && (
                    <IoIosArrowDown className="w-5 h-5 absolute right-3 top-2.5 focus:hidden text-white" />
                  )}
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="   ">
                <ul className="flex gap-x-6">
                  <li className="text-foreground border-b-[3px] border-blue-500 ">
                    Text
                  </li>
                  <li className="text-foreground">Images & Video</li>
                  <li className="text-foreground">Link</li>
                </ul>
                <div className="py-6 w-[90%]  ">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    autoComplete="off"
                    name="title"
                    id="title"
                    value={formData.title}
                    placeholder="Title"
                    className="px-4 py-4 rounded-2xl outline-none text-foreground   focus-visible:ring-0 bg-background   w-full  border border-gray-500"
                  />

                  <div className="mt-1 flex justify-end ">
                    {/* <p className="ml-4  ">Error here</p> */}
                    <p className="text-foreground mr-2 ">0/300</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className=" ">
                    {/* #1a1d1f  #24282a #2a3236*/}
                    <button
                      type="button"
                      id="addTagBtn"
                      onClick={() => setIsShowModal(true)}
                      className={
                        formData.subRedditId
                          ? "bg-[#2a3236] text-sm text-foreground py-[5px] px-3 rounded-full"
                          : "bg-[#1a1d1f] text-sm text-foreground py-[5px] px-3 rounded-full"
                      }
                      disabled={!formData.subRedditId}
                    >
                      Add tags
                    </button>
                  </div>
                  <div className="w-[90%] mt-4">
                    <textarea
                      name="body"
                      id="body"
                      value={formData.body}
                      onChange={handleTextareaChange}
                      placeholder="Body"
                      className="px-4 py-4 rounded-2xl outline-none text-foreground   focus-visible:ring-0 bg-background   w-full  border border-gray-500"
                    ></textarea>
                    <div className="flex justify-end gap-x-2 mt-2">
                      <button className="bg-[#24282a] py-2 px-3 rounded-full text-foreground font-medium">
                        Save draft
                      </button>
                      <button
                        className="bg-[#24282a] py-2 px-4 rounded-full text-foreground font-medium"
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
      {showModal && <TagModal onClose={() => setIsShowModal(false)} />}
    </div>
  );
}

export default CreatePost;