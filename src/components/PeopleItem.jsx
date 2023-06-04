import { MdOutlineArrowForwardIos } from 'react-icons/md'
import '../style/PeopleItem.css';

export function PeopleItem(people) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulamos una solicitud o un proceso que tarda en completarse
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='container-people-item'>
      <div></div>  
      <div key={people.name} className=''>
        <h2 className="item-subtitle">{people.name}</h2>
        <p>{people.gender}</p>
      </div>
      <button className='btn-arrow'>
        <MdOutlineArrowForwardIos className='arrow-svg' />
      </button>
    </div>
  )
}