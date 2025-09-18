import React from 'react';
import './Country.css'


const Country = ({country}) => {
    const handleVisited=()=>{
        console.log("button visited")

    }
    return (
        <div className='country'>
            <h3>Name: {country.name.common}</h3>
            <h3>Region:{country.region.region}</h3>
            <img src={country.flags.flags.png} alt ={country.flags.flags.alt}/>
            <h3>Population: {country.population.population}</h3>
            <h3>Area: {country.area.area}
                {country.area.area > 250000 ? <p>Big country</p>: <p>Small Country</p> }
            </h3>
            <br />
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;