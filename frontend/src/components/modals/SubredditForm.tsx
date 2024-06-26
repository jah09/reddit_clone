import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

//strucure of the Rule Object
interface Rule {
  id: string; // Use string IDs for flexibility
  value: string;
}
//strucure of the Flare Object
interface Flare {
  id: string; // Use string IDs for flexibility
  value: string;
}
//strucure of the Subreddit Object
interface SubReddit {
  id: string;
  name: string;
  creatorId: string;
  rules: Rule[];
  flare: Flare[];
}

function SubredditForm() {
  //--state--
  //form data of the Subreddit object
  const [formData, setFormData] = useState<SubReddit>({
    id: uuidv4(),
    name: "",
    creatorId: uuidv4(), // Set initial value
    rules: [{ id: uuidv4(), value: "" }],
    flare: [{ id: uuidv4(), value: "" }],
  });
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  //--event handler--
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
  };

  //handle add rule, click the btn then it will add a rule input field
  const handleAddNewRule = () => {
    if (formData.rules.length < 3) {
      const nextRuleId = uuidv4();
      setFormData({
        ...formData,
        rules: [...formData.rules, { id: nextRuleId, value: "" }],
      }); //...formData: Spreads the existing properties of formData to keep them.
      //rules: [...formData.rules, { ... }]: Creates a new rules array
      //formData.rules: Includes all existing rules.
    }
  };
  //handle add flare, click the btn then it will add a flare input field
  const handleAddFlare = () => {
    if (formData.flare.length < 3) {
      const nextFlareId = uuidv4();
      setFormData({
        ...formData,
        flare: [...formData.flare, { id: nextFlareId, value: "" }],
      }); //...formData: Spreads the existing properties of formData to keep them.
      //flare: [...formData.flare, { ... }]: Creates a new flare array
      //formData.flare: Includes all existing flare.
    }
  };

  //get the input data for the community name
  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //get the input data for the rules
  const handleInputChangeRule = (
    event: React.ChangeEvent<HTMLInputElement>,
    newIndex: number,
  ) => {
    //new rules
    const newRules = formData.rules.map((rule, index) =>
      index === newIndex ? { ...rule, value: event.target.value } : rule,
    );
    setFormData({ ...formData, rules: newRules });
  };
  //get the input data for the flare
  const handleInputChangeAddFlare = (
    event: React.ChangeEvent<HTMLInputElement>,
    newIndex: number,
  ) => {
    //new flare
    const newflare = formData.flare.map((flare, index) =>
      index === newIndex ? { ...flare, value: event.target.value } : flare,
    );

    setFormData({ ...formData, flare: newflare });
  };

  //handle for submit button or create subreddit
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
    <div className=" sm:p-0 ">
      <Modal
        appElement={document.getElementById("root")}
        className="flex justify-center items-end text-center min-h-screen sm:block  bg-[#00000099]   backdrop-blur-4xl oveflow-hidden"
        isOpen={modalIsOpen}
      >
        <div className="inline-block text-left bg-background-secondary max-h-[90vh] rounded-xl  align-bottom transition-all transform shadow-2xl p-5 sm:align-middle w-3/5 mt-8  overflow-auto custom-y-scrollbar">
          <div className="flex bg-inherit">
            <div className="flex flex-1 flex-col bg-inherit">
              <h1 className="text-primary font-bold text-2xl text-text-primary bg-inherit">
                Tell us about your community
              </h1>
              <p className=" w-[80%] text-gray-400 bg-inherit  text-text-primary">
                A name and description help people understand what your
                community is all about
              </p>
            </div>
            <div
              className="flex place-items-center  w-8 h-8 rounded-full "
              onClick={closeModal}
            >
              <IoCloseOutline className=" w-8 h-8  cursor-pointer text-neutral bg-background-secondary-hover rounded-full" />
            </div>
          </div>
          <form action="" onSubmit={handleFormSubmit} className="bg-inherit">
            <div className="py-6  bg-inherit">
              <div className=" flex justify-between bg-inherit">
                <div className="bg-inherit  w-[55%]">
                  <div className="bg-inherit">
                    <input
                      required
                      type="text"
                      autoComplete="off"
                      name="name"
                      id="name"
                      onChange={handleInputchange}
                      value={formData.name}
                      placeholder="Community name"
                      className="px-4 py-4 rounded-2xl w-full outline-none   focus-visible:ring-offset-0 focus-visible:ring-0 bg-background-primary text-text-primary"
                    />
                    <p className="flex justify-end mr-4 text-text-primary bg-inherit">
                      0
                    </p>
                  </div>
                  <div className="py-4 bg-inherit">
                    <div className="flex justify-between bg-inherit">
                      <h5 className=" font-medium text-text-primary bg-inherit">
                        Add rules to your community
                      </h5>

                      <button
                        onClick={handleAddNewRule}
                        type="button"
                        className=" text-white bg-background-secondary-hover  focus:outline-none   font-medium rounded-full text-sm p-2.5  text-center inline-flex items-center me-2 "
                      >
                        <IoMdAdd className="w-4 h-4 text-neutral bg-inherit" />
                      </button>
                    </div>
                    <div className="mt-4 bg-inherit">
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
                          className="px-4 py-4 rounded-2xl w-full outline-none text-text-primary focus-visible:ring-offset-0 focus-visible:ring-0 bg-background-primary my-2"
                        />
                      ))}
                    </div>
                    <div className="mt-4 bg-inherit">
                      <div className="flex justify-between bg-inherit ">
                        <h5 className="text-text-primary  font-medium bg-inherit">
                          Add flare
                        </h5>

                        <button
                          onClick={handleAddFlare}
                          type="button"
                          className=" bg-background-secondary-hover  focus:outline-none   font-medium rounded-full text-sm p-2.5  text-center inline-flex items-center me-2 "
                        >
                          <IoMdAdd className="w-4 h-4 text-neutral bg-inherit" />
                        </button>
                      </div>
                      <div className="mt-4 bg-inherit">
                        {formData.flare.map((flare, key) => (
                          <input
                            key={flare.id} // Key is now the unique rule ID
                            type="text"
                            name={flare.id}
                            required
                            id={flare.id}
                            placeholder={`Flare ${key + 1}`}
                            value={flare.value}
                            onChange={(e) => handleInputChangeAddFlare(e, key)}
                            className="px-4 py-4 rounded-2xl w-full outline-none text-text-primary focus-visible:ring-offset-0 focus-visible:ring-0 bg-background-primary my-2"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-[40%] bg-inherit ">
                  <div className="bg-background-primary rounded-2xl p-4 shadow-md shadow-black">
                    <p className="font-medium text-text-primary text-xl">
                      r/communityname
                    </p>{" "}
                    <p className="text-text-secondary text-sm">
                      1 member . 1 online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4  flex justify-between bg-inherit">
              <div></div>
              <div className="bg-inherit">
                <button
                  className="bg-neutral py-2 px-3 rounded-full font-medium text-text-primary mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  // disabled={
                  //   !formData.name ||
                  //   formData.rules.every((rule) => !rule.value)
                  // }
                  className={
                    !formData.name ||
                    formData.rules.every((rule) => !rule.value)
                      ? "bg-primary-accent py-2 px-4 rounded-full font-medium text-text-primary mr-2  "
                      : "bg-primary-accent py-2 px-4 rounded-full font-medium text-text-primary mr-2"
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
