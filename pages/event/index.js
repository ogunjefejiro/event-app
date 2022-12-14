import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Meta } from "../../components";

const Event = () => {
  const [formDetails, setFormDetails] = useState({});
  const router = useRouter();

  const addToCalendar = () => {};

  useEffect(() => {
    if (window !== "undefined") {
      const details = JSON.parse(localStorage.getItem("details"));
      setFormDetails({ ...formDetails, ...details });
    }
  }, []);

  return (
    <>
      <Meta title={formDetails?.eventName || "Event"} />
      <div className="bg-[#fbfaff] relative">
        <div className="min-h-screen w-full md:max-w-[75%] mx-auto md:py-8">
          <button className="hidden md:block text-[#4F4F4F] mb-8 md:mb-16 px-4 md:px-0" onClick={() => router.back()}>
            Back
          </button>

          <div className="flex flex-col-reverse md:flex-row gap-12">
            <div className="w-full px-6 md:px-0">
              <div className="mb-12">
                <h1 className="text-2xl md:text-4xl text-primary font-semibold">{formDetails?.eventName}</h1>
                <p className="text-[#828282]">
                  Hosted by <span className="font-semibold">{formDetails?.hostName}</span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between cursor-pointer" onClick={addToCalendar}>
                  <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-lg bg-white shadow">
                      <img src="/icons/calendar.svg" alt="calendar" className="w-fit" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">{formDetails?.startTime}</p>
                      <p className="text-primary">
                        to <span className="font-bold">{formDetails?.endTime}</span> UTC +10
                      </p>
                    </div>
                  </div>
                  <img src="/icons/right-arrow.svg" alt="calendar" className="w-2" />
                </div>

                <div className="flex justify-between cursor-pointer">
                  <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-lg bg-white shadow">
                      <img src="/icons/location.svg" alt="calendar" className="w-fit" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">{formDetails?.venue}</p>
                      <p className="text-primary">{formDetails?.address}</p>
                    </div>
                  </div>
                  <img src="/icons/right-arrow.svg" alt="calendar" className="w-2" />
                </div>
              </div>
            </div>

            <div className="w-full h-[50vh] md:h-[75vh]">
              {formDetails?.photo && (
                <img
                  src={formDetails?.photo}
                  alt="cover photo"
                  className="object-cover w-full h-full shadow-lg rounded"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
