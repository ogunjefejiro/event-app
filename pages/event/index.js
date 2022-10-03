import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
    <div className="bg-[#fbfaff]">
      <div className="min-h-screen max-w-[90%] lg:max-w-[75%] mx-auto py-8">
        <button className="text-[#4F4F4F] mb-8 md:mb-16" onClick={() => router.back()}>
          Back
        </button>

        <div className="flex flex-col-reverse md:flex-row gap-12">
          <div className="w-full">
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

          <div className="w-full">
            <img src={formDetails?.photo} alt="cover photo" className="w-full shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
