import React from 'react'
import Cardcor from './Cardcor';

const Lowercomp = ({weat, des, speed}) => {
  return (
    <div>
      <div className='border border-white h-[35px] w-[350px] mt-7 rounded-2xl text-white font-bold flex justify-center items-center text-[25px]'>{weat}
         
      </div>
      <div className='grid grid-flow-col mt-[25px] w-[350px] h-[95px] bg-white gap-[-10px] rounded-2xl border border-black'>
            <Cardcor label="Description" value={des} className="flex justify-center items-center"/>
            <Cardcor label="Weather" value={weat}className="flex justify-center items-center"/>
            <Cardcor label="Wind" value={speed}className="flex justify-center items-center"/>
          </div>
    </div>
  )
}

export default Lowercomp;
