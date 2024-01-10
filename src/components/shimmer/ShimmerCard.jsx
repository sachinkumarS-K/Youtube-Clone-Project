import React from 'react'

const ShimmerCard = () => {
  return (
    <div className=" h-[16rem] w-[23rem]">
      <div className=" h-[80%] w-full bg-gray-300 rounded-xl"></div>
      <div className="px-6 flex items-center gap-4">
        <div className="w-12 h-10 mt-2 ml-2 rounded-full bg-gray-300 "></div>
        <div className='w-full space-y-2 mt-3'>
          <div className="w-[95%] rounded-lg bg-gray-300 h-3"></div>
          <div className="w-[75%] rounded-lg px-5 bg-gray-300 h-2"></div>
         
        </div>
      </div>
    </div>
  );
}

export default ShimmerCard
