import React from "react";

const WeatherList = ({list, isLoaded}) => {
    
  
     if(isLoaded)   {
        const {name, main, weather} = list;
        console.log( list);
        const icon = weather.map(e => e.icon) ;

        
        return (<div>
         <p>{name}</p><img src={`https://openweathermap.org/img/w/${icon[0]}.png`} />
         <p>{`Temp_now ${(main.temp - 273.15).toFixed(2)}`}</p><br />
         <p>{`temp_max ${(main.temp_max - 273.15).toFixed(2)}`}</p><br />
         <p>{`temp_min ${(main.temp_min - 273.15).toFixed(2)}`}</p><br />
         
          </div>)
 }

  return null 

};

export default WeatherList;
