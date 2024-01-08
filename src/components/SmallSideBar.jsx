import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BsFileEarmarkPlayFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
const SmallSideBar = () => {
  return (
    <div className="w-[6%] hidden md:block lg:block  fixed shadow-xl h-[90vh] mt-[10vh]">
      <div className="flex flex-col gap-3 py-5 px-6">
        <div className="flex gap-3 flex-col items-center">
          <GoHome className="text-xl text-gray-500" />
          <p className="font-semibold text-sm">Home</p>
        </div>
        <div className="flex gap-3 flex-col items-center">
          <SiYoutubeshorts className="text-sm text-gray-500" />
          <p className="font-semibold text-lg">Shorts</p>
        </div>
        <div className="flex gap-3 flex-col items-center">
          <MdSubscriptions className="text-xl text-gray-500" />
          <p className="font-semibold text-sm">Subscription</p>
        </div>

        <div className="flex gap-3 flex-col items-center">
          <BsFileEarmarkPlayFill className="text-xl text-gray-500" />
          <p className="font-semibold text-lg">You</p>
        </div>
        <div className="flex gap-3 flex-col items-center">
          <MdHistory className="text-xl text-gray-500" />
          <p className="font-semibold text-lg">History</p>
        </div>
      </div>
    </div>
  );
}

export default SmallSideBar
