import { useState, useEffect } from 'react';
import * as API from './services/utils';
import { PeopleItem } from './components/PeopleItem';
import { TraitsPeople } from './components/TraitsPeople';
import { Navbar} from './components/Navbar';
import './style/loader.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    API.getAllPeople()
      .then((data) => {
        setPeoples(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar titulo={loading ? 'People of Star Wars' : 'People'} />
      {loading ? (
        <div className="loader">
          <div className="lds-spinner"></div>
          <div className="loader-text">Cargando...</div>
        </div>
        ) : ( peoples ? (
          <div>
            {peoples.map((item) => (
              <PeopleItem {...item} key={item.name}>
              </PeopleItem>
              ))}
          </div>
        ):(
          <div>
            <h1>Failed to Load Data</h1>
          </div>
        )
         )
      }
    </div>
  );
}


export default App;

