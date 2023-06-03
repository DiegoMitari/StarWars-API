import { MdOutlineArrowForwardIos } from 'react-icons/md'
import '../style/PeopleItem.css'
export function PeopleItem(people) {
  return (
    <div className='container-people-item'>
      <div key={people.name} className=''>
        <h2>{people.name}</h2>
        <p>{people.gender}</p>
      </div>
      <button className='btn-arrow'>
        <MdOutlineArrowForwardIos className='arrow-svg' />
      </button>
    </div>
  )
}