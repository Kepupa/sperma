import React, { useEffect, useState } from 'react'; 
 
const CafesTable = () => { 
    const [cafes, setCafes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const locations = [ 
        { name: "Московская", code: "Moscow" }, 
        { name: "Арбат", code: "Arbat" }, 
        { name: "Александровский сад", code: "Alexanders Garden" }, 
        { name: "Парк Культуры", code: "Culture" }, 
        { name: "Театральная", code: "Theater" }, 
    ]; 
    useEffect(() => { 
        const fetchCafes = async () => { 
            try { 
                const response = await fetch('/cafes'); 
                if (!response.ok) { 
                    throw new Error('Network response was not ok'); 
                } 
                const data = await response.json(); 
                setCafes(data); 
            } catch (error) { 
                console.error('Ошибка при получении данных:', error); 
            } finally { 
                setLoading(false); 
            } 
        }; 
 
        fetchCafes(); 
    }, []); 
 
    return ( 
        <div className='cafesTable'> 
            <h1>Список кафе</h1> 
            <select> 
                {locations.map(location => ( 
                    <option key={location.code} value={location.code}> 
                        {location.name} 
                    </option> 
                ))} 
            </select> 
 
            {loading ? ( 
                <p>Загрузка...</p> 
            ) : ( 
                <ul className="cardsList"> 
                    {cafes.map(cafe => ( 
                        <li className="card" key={cafe.id}> 
                            <img  
                                src={cafe.image || 'https://via.placeholder.com/150'}  
                                alt={cafe.name}  
                            /> 
                            <h2>{cafe.name}</h2> 
                            <p>{cafe.description}</p> 
                            <p>{cafe.address}</p> 
                            <p>Subway: {cafe.subway}</p> 
                            <p>{cafe.hours}</p> 
                        </li> 
                    ))} 
                </ul> 
            )} 
        </div> 
    ); 
}; 
 
export default CafesTable;