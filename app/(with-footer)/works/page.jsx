"use client";
import Work from "@/components/work/Work";
import GitHub from "./_components/Github";
import { useEffect } from "react";

function Works() {
  useEffect(() => {
    window.location.pathname;
  }, []);
  return (
    <div className="w-full">
      {/* <div className="w-full flex items-center justify-center h-full">
        <div className="w-4/5 h-full flex items-center justify-center bg-red-500 md:max-w-2xl rounded-b-lg text-white font-semibold p-2">
          work in progress
        </div>
      </div> */}
      <div className="w-full">
        <GitHub />
        <div className="w-full flex items-center justify-center my-4 md:mx-0 mx-7">
          <div className="max-w-3xl w-full flex items-center justify-start">
            <p className="text-gray-400 text-xl font-semibold tracking-wider p-0 ml-6 selection:text-purple-900 text-left">
              WORK
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col md:px-0 px-7">
          <div className="max-w-3xl w-full h-full flex flex-col gap-5 items-center justify-center">
            {/* <p className="text-gray-400 text-xl font-semibold tracking-wider p-0 selection:text-purple-900 mb-2">
            WORK
          </p> */}
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
