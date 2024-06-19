import React from 'react'
import Uppercomp from './Upercomp'
import Middlecomp from './MiddleComp'
import Lowercomp from './Lowercomp'

const Maincomp = ({cityName, data}) => {
  return (
    <div>
      <div className="h-[600px] w-[450px] border border-red-500 flex flex-col justify-center items-center rounded-3xl bg-[url('D:\weather_app\src\images\sunny.png')] bg-cover bg-center">
        <Uppercomp cityName={cityName} temp={Math.round(data?.main?.temp -273)} />
        <Middlecomp lati={data?.coord?.lat} long={data?.coord?.lon} pressure={data?.main?.pressure} humidity={data?.main?.humidity} />
        <Lowercomp weat={data?.weather[0]?.main} des={data?.weather[0]?.description} speed={data?.wind?.speed}/>
      </div>
    </div>
  )
}

export default Maincomp
