import React from 'react'

const Buttons = ({btnText}) => {
  return (
    <div>
            <button className='text-slate-900 py-[6px] px-4 rounded-xl bg-gray-100 font-medium '> 
                  {btnText}
      </button>
    </div>
  )
}

export default Buttons
