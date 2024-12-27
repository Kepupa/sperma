// src/CafesTable.jsx
import React, { useEffect, useState } from 'react';
import FilterCafes from './FilterCafes';
import cafesData from '../__fixtures__/cafes.js'; // Импортируем данные о кафе

const CafesTable = () => {
    const [cafes, setCafes] = useState([]);
    const [filteredCafes, setFilteredCafes] = useState([]);
    const [selectedSubway, setSelectedSubway] = useState('All');

    useEffect(() => {
        // Устанавливаем начальные данные о кафе
        setCafes(cafesData.cafes);
        setFilteredCafes(cafesData.cafes);
    }, []);

    const handleSubwayChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSubway(selectedValue);

        if (selectedValue === 'All') {
            setFilteredCafes(cafes);
        } else {
            const filtered = cafes.filter(cafe => cafe.subwayCode === selectedValue);
            setFilteredCafes(filtered);
        }
    };

    return (
        <div className='cafesTable'>
            <FilterCafes onSubwayChange={handleSubwayChange} />
            <ul className='cardsList'>
                {filteredCafes.map((cafe) => (
                    <li className='card' key={cafe.id}>
                        <img src={cafe.img || "https://via.placeholder.com/150"} alt="" />
                        <h2>{cafe.name}</h2>
                        <p>{cafe.desc}</p>
                        <p>{cafe.address}</p>
                        <p>Subway: {cafe.subwayCode}</p>
                        <p>{cafe.workTime}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CafesTable;
