import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import close from "../../assets/close.svg";
import add from "../../assets/add.svg";
import { v4 as uuidv4 } from "uuid";
interface Rule {
  id: string; // Use string IDs for flexibility
  value: string;
}

interface SubReddit {
  id: string;
  name: string;
  creatorId: string;
  rules: Rule[];
}

function SubredditForm() {
  //form data
  const [formData, setFormData] = useState<SubReddit>({
    id: uuidv4(),
    name: "",
    creatorId: uuidv4(), // Set initial value
    rules: [{ id: uuidv4(), value: "" }],
  });

  const navigate = useNavigate();
  //modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  function closeModal() {
    setModalIsOpen(false);
    navigate("/");
  }

  //handleAddNewRule -> click the btn then it will add new rule input
  const handleAddNewRule = () => {
    if (formData.rules.length < 3) {
      const nextRuleId = uuidv4();
      setFormData({
        ...formData, //...formData: Spreads the existing properties of formData to keep them.
        //rules: [...formData.rules, { ... }]: Creates a new rules array
        //formData.rules: Includes all existing rules.
        rules: [...formData.rules, { id: nextRuleId, value: "" }],
      });
    }
  };

  //handleInputchange for the community name
  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle onchange for the rules
  const handleInputChangeRule = (
    event: React.ChangeEvent<HTMLInputElement>,
    ruleIndex: number
  ) => {
    const newRules = formData.rules.map((rule, index) =>
      index === ruleIndex ? { ...rule, value: event.target.value } : rule
    );

    setFormData({ ...formData, rules: newRules });
  };

  //handle submit bttn
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log("the form data", formData);
      //1 create subreddit
      //2 create rules entry
      //handle success response
    } catch (error) {}
  };
  return (
    <div className="overflow-y-auto sm:p-0   pr-4 pl-4  ">
      <Modal
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-[#181c1f] min-h-full rounded-xl overflow-hidden align-bottom transition-all transform shadow-2xl p-5 sm:align-middle w-3/5 mt-8">
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
          <form action="" onSubmit={handleFormSubmit}>
            <div className="py-6  ">
              <div className=" flex justify-between">
                <div className="  w-[55%]">
                  <div>
                    <input
                      required
                      type="text"
                      autoComplete="off"
                      name="name"
                      id="name"
                      onChange={handleInputchange}
                      value={formData.name}
                      placeholder="Community name"
                      className="px-4 py-4 rounded-2xl w-full outline-none text-foreground focus-visible:ring-offset-0 focus-visible:ring-0 bg-[#2a3236]"
                    />
                    <p className="flex justify-end mr-4 text-gray-400">0</p>
                  </div>
                  <div className="py-4">
                    <div className="flex justify-between ">
                      <h5 className="text-foreground  font-medium">
                        Add rules to your community
                      </h5>

                      <button
                        onClick={handleAddNewRule}
                        type="button"
                        className=" text-white bg-[#2a3236]  focus:outline-none   font-medium rounded-full text-sm p-2.5  text-center inline-flex items-center me-2 "
                      >
                        <img src={add} alt="" className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-4">
                      {formData.rules.map((rule, index) => (
                        <input
                          key={rule.id} // Key is now the unique rule ID
                          type="text"
                          name={rule.id}
                          required
                          id={rule.id}
                          placeholder={`Rule ${index + 1}`}
                          value={rule.value}
                          onChange={(e) => handleInputChangeRule(e, index)}
                          className="px-4 py-4 rounded-2xl w-full outline-none text-foreground focus-visible:ring-offset-0 focus-visible:ring-0 bg-[#2a3236] my-2"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" w-[40%]  ">
                  <div className="bg-[#181c1f] rounded-2xl p-3 shadow-md shadow-black">
                    <p className="font-medium text-foreground text-xl">
                      r/communityname
                    </p>{" "}
                    <p className="text-gray-400 text-sm">1 member . 1 online</p>
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
                <button
                  disabled={
                    !formData.name ||
                    formData.rules.every((rule) => !rule.value)
                  }
                  className={
                    !formData.name ||
                    formData.rules.every((rule) => !rule.value)
                      ? "bg-[#24282a] py-2 px-4 rounded-full font-medium text-foreground mr-2 cursor-no-drop"
                      : "bg-[#2a3236] py-2 px-4 rounded-full font-medium text-foreground mr-2"
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default SubredditForm;
