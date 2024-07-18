
// src/WeatherData.jsx
import React from 'react';

const WeatherData = ({day, conditions, time}) => {
    return (
        <>
        <h2>{day}</h2>
       <div> {conditions}</div>
        <div> {time}</div>
        </>
    )
};

export default WeatherData;




