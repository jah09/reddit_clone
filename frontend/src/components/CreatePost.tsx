import React,{useState} from "react";

function CreatePost() {
  const [formData, setFormData] = useState({
    names: '',
    description : ''
  })
  return (
    <div className=" ">
      <div className="py-6 px-10">
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-[#b7cad4] text-xl tracking-normal">
              Create post
            </h1>
            <h5 className="text-[#b7cad4] font-medium">Drafts</h5>
          </div>
          <div className="py-4">
            <input
              type="text"
              id="searc"
              name="search"
              className="rounded-full py-2 px-3 outline-none bg-[#2a3236] text-gray-100 placeholder-slate-50 font-medium"
              placeholder="Select a community"
            />
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
              <div className="py-6 w-[80%]">
                <input
                  required
                  type="text"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Title"
                  className="px-4 py-4 rounded-2xl outline-none text-foreground   focus-visible:ring-0 bg-background   w-full  border border-gray-500"
                />
                <div className="mt-1 flex justify-end">
                  <p className="text-foreground mr-2 ">0/300</p>
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <button className="bg-[#24282a] text-sm text-foreground py-[5px] px-3 rounded-full">
                    Add tags
                  </button>
                </div>
                <div className="w-[80%] mt-4">
                  <textarea
                    name="body"
                    id="body"
                    placeholder="Body"
                    className="px-4 py-4 rounded-2xl outline-none text-foreground   focus-visible:ring-0 bg-background   w-full  border border-gray-500"
                  ></textarea>
                  <div className="flex justify-end gap-x-2 mt-2">
                    <button className="bg-[#24282a] py-2 px-3 rounded-full text-foreground">
                      Save drafts
                    </button>
                    <button className="bg-[#24282a] py-2 px-4 rounded-full text-foreground">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
