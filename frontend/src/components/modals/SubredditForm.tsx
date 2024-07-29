import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import * as communityAPI from "@/services/community";
import axios from "axios";
import AlertModal from "@/components/alert/index";
import { AlertObject } from "./LoginModal";
//strucure of the Rule Object
interface Rule {
  rule: string;
}
//strucure of the Flare Object
interface Flare {
  flare: string;
}
//strucure of the Subreddit Object
export interface SubReddit {
  subredditName: string;
  subredditRuleDTOList: Rule[];
  flareDTOS: Flare[];
}

function SubredditForm() {
  //--state--
  //form data of the Subreddit object
  const [formData, setFormData] = useState<SubReddit>({
    subredditName: "",
    subredditRuleDTOList: [{ rule: "" }],
    flareDTOS: [{ flare: "" }],
  });
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [alertShowModal, setAlertShowModal] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertObject>({ title: "", message: "" });

  const navigate = useNavigate();

  //--event handler--
  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/");
  };

  //handle add rule, click the btn then it will add a rule input field
  const handleAddNewRule = () => {
    if (formData.subredditRuleDTOList.length < 3) {
      setFormData({
        ...formData,
        subredditRuleDTOList: [...formData.subredditRuleDTOList, { rule: "" }],
      }); //...formData: Spreads the existing properties of formData to keep them.
      //rules: [...formData.rules, { ... }]: Creates a new rules array
      //formData.rules: Includes all existing rules.
    }
  };
  //handle add flare, click the btn then it will add a flare input field
  const handleAddFlare = () => {
    if (formData.flareDTOS.length < 3) {
      setFormData({
        ...formData,
        flareDTOS: [...formData.flareDTOS, { flare: "" }],
      }); //...formData: Spreads the existing properties of formData to keep them.
      //flare: [...formData.flare, { ... }]: Creates a new flare array
      //formData.flare: Includes all existing flare.
    }
  };

  //get the input data for the community name
  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
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
    // const newRules = formData.rules.map((rule, index) =>
    //   index === newIndex ? { ...rule, value: event.target.value } : rule
    // );
    //new rules
    const newRules = formData.subredditRuleDTOList.map((rule, index) =>
      index === newIndex ? { ...rule, rule: event.target.value } : rule,
    );

    setFormData({ ...formData, subredditRuleDTOList: newRules });
  };
  //get the input data for the flare
  const handleInputChangeAddFlare = (
    event: React.ChangeEvent<HTMLInputElement>,
    newIndex: number,
  ) => {
    //new flare
    const newflare = formData.flareDTOS.map((flare, index) =>
      index === newIndex ? { ...flare, flare: event.target.value } : flare,
    );

    setFormData({ ...formData, flareDTOS: newflare });
  };

  //handle for submit button or create subreddit
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await communityAPI.storeCommunity(formData);
      console.log("response in creating subbreddit", response);
      if (response.statusCode === 201) {
        setAlertShowModal(true);
        setAlert({ ...alert, message: response.message, title: "Success" });
        setFormData({
          subredditName: "",
          subredditRuleDTOList: [{ rule: "" }],
          flareDTOS: [{ flare: "" }],
        });
        //
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error", error);
        //  if (error.response?.data.statusCode === 404) {
        //    setAlertShowModal(true);
        //    setAlert({
        //      ...alert,
        //      message: error.response?.data.message,
        //      title: "Error",
        //    });
        //  }
      }
    }
  };

  //handle alert button click
  const handleOnConfirmAlert = () => {
    if (alert.title === "Success") {
      navigate("/");
    } else {
      setFormData({
        subredditName: "",
        subredditRuleDTOList: [{ rule: "" }],
        flareDTOS: [{ flare: "" }],
      });
    }
    setAlertShowModal(false); // Close the alert
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
                      name="subredditName"
                      id="subredditName"
                      onChange={handleInputchange}
                      value={formData.subredditName}
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
                      {formData.subredditRuleDTOList.map((rule, index) => (
                        <input
                          key={index}
                          type="text"
                          required
                          defaultValue={rule.rule}
                          placeholder={`Rule ${index + 1}`}
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
                        {formData.flareDTOS.map((flare, index) => (
                          <input
                            key={index}
                            type="text"
                            required
                            defaultValue={flare.flare}
                            placeholder={`Flare ${index + 1}`}
                            onChange={(e) =>
                              handleInputChangeAddFlare(e, index)
                            }
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
                      f/ {formData.subredditName}
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
                    !formData.subredditName ||
                    formData.subredditRuleDTOList.every((rule) => !rule.rule)
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
      {alertShowModal && (
        <AlertModal
          alertData={alert}
          showmodal={alertShowModal}
          onConfirm={handleOnConfirmAlert}
        />
      )}
    </div>
  );
}

export default SubredditForm;
