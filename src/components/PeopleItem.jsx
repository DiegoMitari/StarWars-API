import { MdOutlineArrowForwardIos } from 'react-icons/md';
import '../style/Peopleitem.css';

export function PeopleItem({ name, gender, url, onClick }) {
  return (
    <div className='container-people-item'>
      <div key={name} className=''>
        <h2 className="item-subtitle">{name}</h2>
        <p>{gender}</p>
      </div>
      <button className='btn-arrow' onClick={() => onClick(url)}>
        <MdOutlineArrowForwardIos className='arrow-svg' />
      </button>
    </div>
  );
}

export async function getCharacterInfo(peopleUrl) {
  try {
    const response = await fetch(peopleUrl);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
