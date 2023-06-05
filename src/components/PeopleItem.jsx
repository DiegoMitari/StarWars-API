import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { TraitsPeople } from './TraitsPeople';
import '../style/PeopleItem.css';

export function PeopleItem(people) {

  return (
    <div className='container-people-item'>
      <div key={people.name} className=''>
        <h2 className="item-subtitle">{people.name}</h2>
        <p>{people.gender}</p>
        <p>{people.mostrar}</p>
      </div>
      <button className='btn-arrow'>
        <MdOutlineArrowForwardIos className='arrow-svg'>
          {/* <Link to={`https://swapi.dev/api/people/${}`}>{character.name}</Link> */}
        </MdOutlineArrowForwardIos>
      </button>
    </div> 
  )
}
