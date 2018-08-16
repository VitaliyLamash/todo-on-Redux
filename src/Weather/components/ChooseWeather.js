import React from 'react';

const ChooseWeather = ({ chooseWeather, changeTemp }) => {
    return (
        <select onChange={(event) => chooseWeather(event)} >
            <option value="" >Choose the right town</option>
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
