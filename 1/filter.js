// src/FilterCafes.jsx
import React from 'react';

const FilterCafes = ({ onSubwayChange }) => {
    return (
        <div className='controls'>
            <select name="subway" id="subway" onChange={onSubwayChange}>
                <option value="All">Все</option>
                <option value="Alexanders Garden">Александровский сад</option>
                <option value="Moscow">Москва</option>
                <option value="Arbat">Арбат</option>
                <option value="Theater">Театр</option>
            </select>
        </div>
    );
};

export default FilterCafes;
