import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Ensure this import is present to load Tailwind CSS
import Maincomp from './Component/Maincomp';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [click, setClick] = useState(false);

  const fetchData = async () => {
    const apikey = "8d727880e35e6e3e9040ed4989afaeef";
  
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
      setWeatherData(res.data);
      setClick(true);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setWeatherData(null); // Reset weatherData on error
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#2a2727] ">
      <p className='text-white font-bold text-[30px]'> Enter the City Name</p>
      <div className="mb-3 w-[400px] text-[25px] font-changa flex justify-between items-center">
        <input
          type="text"
          value={city}
          className="px-3 py-2 w-[70%] border border-green-500 rounded-md"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className='border border-purple-700 py-3 bg-purple-500 text-white font-changa w-[28%]'
          onClick={fetchData}
        >
          Submit
        </button>
      </div>

      {click && city && weatherData && (
        <Maincomp cityName={city} data={weatherData} />
      )}

      {click && city && !weatherData && (
        <p className="text-red-500 font-bold">City not found. Please enter a valid city name.</p>
      )}

    </div>
  );
};

export default App;
