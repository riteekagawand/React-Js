import React from 'react'

const Uppercomp = ({cityName, temp}) => {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  return (
    <div >
      <div className=' text-center text-white font-black text-[50px] font-serif mt-[-50px]'>{cityName}</div>
      <div className='text-center text-white font-black text-[100px] mt-[-50px] font-sans'>{temp}°C</div>
      <div className='text-center text-white font-black text-[25px] mt-[-20px] font-sans'>{day}/{month}/{year}</div>
    </div>
  )
}

export default Uppercomp