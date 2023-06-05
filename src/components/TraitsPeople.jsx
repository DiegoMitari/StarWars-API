import React, { useState } from 'react';

import '../style/PeopleItem.css';

export function TraitsPeople(people){
    console.log('people-----------------')
    console.log(people.eye_color)
    // const [resultPeople, setPeoples] = useState({allowances: people});
    // setPeoples(people)
    return (
        <div className='container-traits-item'>
            <h2 className="item-subtitle">General Information</h2>
            <div key={people.eye_color} className=''>
                <div>
                    <h2 className="item-subtitle-traits">Eye Color</h2>
                    <h2 className="item-subtitle">{people.eye_color}</h2>
                </div>
                <div>
                    <h2 className="item-subtitle-traits">Hair Color</h2>
                    <h2 className="item-subtitle-traits">{people.hair_color}</h2>
                </div>
                <div>
                    <h2 className="item-subtitle-traits">Skin Color</h2>
                    <h2 className="item-subtitle-traits">{people.skin_color}</h2>
                </div>
                <div>
                    <h2 className="item-subtitle-traits">Birth Year</h2>
                    <h2 className="item-subtitle-traits">{people.birth_year}</h2>     
                </div>
            </div>
            <h2 className="item-subtitle">Vehicles</h2>
        </div>
    )
}