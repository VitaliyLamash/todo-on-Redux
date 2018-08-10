import React from 'react';

const ChooseWeather = ({ chooseWeather, ID }) => {
    return (
        <select onChange={(event) => chooseWeather(event)} defaultValue={ID}>

            <option value={ID} >Choose the right town</option>
            <option value="524901">Moscow</option> 
            <option value="703448">Kyiv</option>
            <option value="2643743">London</option>
            <option value="5128581">New - Youk</option>
            <option value="6094817">Ottawa</option>
            <option value="2988507">Paris</option>
            <option value="756135">Warsaw</option>
            <option value="1850147">Tokyo</option>
        </select>
    )
};

export default ChooseWeather;
