import React from "react";
import { useRouter } from "next/router";
import { Meta } from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Meta />
      <div className="bg-[#F6F2FF] w-full">
        <div className="flex flex-col-reverse md:flex-row items-center min-h-screen w-full max-w-[90%] lg:max-w-[85%] mx-auto py-8">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-2 justify-center w-[350px]">
              <img src="/images/phone.png" alt="phone" className="w-full" />
              <div className="md:hidden flex justify-center w-full">
                <button
                  className=" py-2 w-full bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white rounded-lg"
                  onClick={() => router.push("/create")}
                >
                  🎉 Create my event
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center md:justify-end">
            <div>
              <h1 className="text-5xl lg:text-8xl font-bold text-center md:text-right text-primary">
                Imagine if <span className="block text-[#E87BF8]">Snapchat</span> had events.
              </h1>
              <p className="text-[#4F4F4F] text-base md:text-lg text-center md:text-right leading-5 mt-2">
                Easily host and share events with your friends <br /> across any social media.
              </p>
              <div className="hidden md:flex justify-center md:justify-end my-10">
                <button
                  className=" py-2 px-8 bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white rounded-lg"
                  onClick={() => router.push("/create")}
                >
                  🎉 Create my event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
