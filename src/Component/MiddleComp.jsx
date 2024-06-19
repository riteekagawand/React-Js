import React from 'react';
import Cardcor from './Cardcor';

const Middlecomp = ({ lati, long, pressure, humidity }) => {
  return (
    <div className='border border-yellow-500 h-[145px] w-[350px] mt-2 rounded-xl bg-white'>
      <div className='grid grid-cols-2 gap-[25px] text-[55px]justify-center items-center'>
        <Cardcor label="Latitude" value={lati} />
        <Cardcor label="Longitude" value={long} />
        <Cardcor label="Pressure" value={pressure} />
        <Cardcor label="Humidity" value={humidity} />
      </div>
    </div>
  );
}

export default Middlecomp;
