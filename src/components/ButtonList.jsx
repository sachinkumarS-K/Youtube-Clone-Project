import React from 'react'
import Buttons from './Buttons'
import { useSelector } from 'react-redux';

const ButtonList = () => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen); 
  return (
    <div
      className={`${
        isSideBarOpen ? "ml-[17%]" : " ml-20 pl-[6%]"
      } mt-[10vh] fixed   w-full overflow-x-scroll bg-white mb-[10rem] `}
    >
      <div className="flex gap-7 ">
        <Buttons btnText={"All"} />
        <Buttons btnText={"Java"} />
        <Buttons btnText={"Music"} />
        <Buttons btnText={"JavaScript"} />
        <Buttons btnText={"Gaming"} />
        <Buttons btnText={"Tailwind"} />
        <Buttons btnText={"Mixes"} />
        <Buttons btnText={"Bharti Singh"} />
        <Buttons btnText={"Live"} />
        <Buttons btnText={"Big Boss"} />
        <Buttons btnText={"React"} />
        <Buttons btnText={"Hitesh"} />
      </div>
    </div>
  );
}

export default ButtonList
