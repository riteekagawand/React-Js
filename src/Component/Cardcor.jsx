import React from 'react';

const Cardcor = ({ label, value }) => {
  return (
    <div className=' h-[45px] w-[120px] text-black text-[20px] mb-[-15px] mt-[18px] ml-1.5 font-bold flex justify-center items-center'>
      {label}<br/> {value}
    </div>
  );
}

export default Cardcor;
