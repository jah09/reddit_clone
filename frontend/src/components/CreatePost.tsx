import React, { useState } from "react";
import arrowdown from "../assets/arrowdown.svg";
interface FormData {
  title: string;
  description: string;
  subRedditId: string;
}
function CreatePost() {
  //defining the formData
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    subRedditId:''
  });

  //handle form submit
  const handleFormSubmit = () => {
    
  }
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
          <form action="" onSubmit={handleFormSubmit}>
            <div className="py-4  ">
              <div className="relative   w-52 ">
                {" "}
                <input
                  type="text"
                  id="searc"
                  name="search"
                  className="rounded-full py-2 px-3 outline-none bg-[#2a3236] text-gray-100 placeholder-slate-50 "
                  placeholder="Select a community"
                />
                <img
                  src={arrowdown}
                  alt=""
                  className="w-4 h-4 absolute right-3 top-3 focus:hidden"
                />
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
                    required
                    type="text"
                    autoComplete="off"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="px-4 py-4 rounded-2xl outline-none text-foreground   focus-visible:ring-0 bg-background   w-full  border border-gray-500"
                  />

                  <div className="mt-1 flex justify-end ">
                    {/* <p className="ml-4  ">Error here</p> */}
                    <p className="text-foreground mr-2 ">0/300</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    {/* #1a1d1f  #24282a #2a3236*/}
                    <button
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
                      placeholder="Body"
                      className="px-4 py-4 rounded-2xl outline-none text-foreground   focus-visible:ring-0 bg-background   w-full  border border-gray-500"
                    ></textarea>
                    <div className="flex justify-end gap-x-2 mt-2">
                      <button className="bg-[#24282a] py-2 px-3 rounded-full text-foreground">
                        Save draft
                      </button>
                      <button className="bg-[#24282a] py-2 px-4 rounded-full text-foreground">
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
    </div>
  );
}

export default CreatePost;
