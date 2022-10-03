import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { InputField, Meta } from "../../components";

const initialState = {
  hostName: "",
  eventName: "",
  startTime: "",
  endTime: "",
  venue: "",
  address: "",
  photo: "",
};

const Create = () => {
  const [formDetails, setFormDetails] = useState(initialState);
  const { hostName, eventName, startTime, endTime, venue, address } = formDetails;
  const picture = useRef(null);
  const router = useRouter();

  const bgImage = {
    backgroundImage: formDetails.photo ? `url(${formDetails.photo})` : "url('./images/placeholder.png')",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    const maxAllowedSize = 0.5 * 1024 * 1024; //500KB calculation
    if (file) {
      if (file.size > maxAllowedSize) return alert("image should not be more than 500kb");
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormDetails({ ...formDetails, photo: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setFormDetails(initialState);
    localStorage.removeItem("details");
    router.push("/");
  };

  const handleNext = () => {
    if (!hostName || !eventName || !startTime || !endTime || !venue || !address)
      return alert("All fields are required");
    localStorage.setItem("details", JSON.stringify(formDetails));
    router.push("/event");
  };

  useEffect(() => {
    if (window !== "undefined") {
      const details = JSON.parse(localStorage.getItem("details"));
      setFormDetails({ ...formDetails, ...details });
    }
  }, []);
  return (
    <>
      <Meta title="Create Event" />
      <div>
        <div className="min-h-screen max-w-[90%] lg:max-w-[85%] mx-auto py-8">
          <button className="text-[#4F4F4F]" onClick={handleCancel}>
            Cancel
          </button>
          <h1 className="text-3xl md:text-4xl text-primary font-semibold my-6 md:my-10">Create Your Event</h1>
          <div className="flex flex-col-reverse md:flex-row gap-12">
            <div className="w-full">
              <div className="space-y-6">
                <InputField
                  name="hostName"
                  label="My event host is"
                  formDetails={formDetails}
                  handleChange={handleChange}
                />
                <InputField
                  name="eventName"
                  label="My event is called"
                  formDetails={formDetails}
                  handleChange={handleChange}
                />
                <InputField
                  name="startTime"
                  label="It starts at"
                  type="datetime-local"
                  formDetails={formDetails}
                  handleChange={handleChange}
                />
                <InputField
                  name="endTime"
                  label="It ends at"
                  type="datetime-local"
                  formDetails={formDetails}
                  handleChange={handleChange}
                />
                <InputField
                  name="venue"
                  label="It's happening at"
                  formDetails={formDetails}
                  handleChange={handleChange}
                />
                <InputField
                  name="address"
                  label="It's located at"
                  formDetails={formDetails}
                  handleChange={handleChange}
                />
              </div>
              <button
                className="btn border-none w-full my-12 py-2 px-8 bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white rounded-lg"
                onClick={handleNext}
              >
                Next
              </button>
            </div>

            <div
              className={`w-full flex justify-center h-[300px] md:h-[600px] items-center bg-cover bg-center rounded-lg shadow cursor-pointer`}
              style={bgImage}
              onClick={() => picture.current.click()}
            >
              <div className="flex flex-col justify-center items-center text-center">
                {!formDetails?.photo && (
                  <>
                    <img src="/icons/camera.svg" alt="camera" className="w-fit shadow-lg" />
                    <p className="text-white text-xl font-bold">Choose a photo</p>
                  </>
                )}
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple={false}
                  ref={picture}
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
