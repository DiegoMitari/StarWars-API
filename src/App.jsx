import { useState, useEffect } from 'react';
import * as API from './services/utils';
import { PeopleItem } from './components/PeopleItem';
import { Navbar} from './components/Navbar'
import './style/loader.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [peoples, setPeoples] = useState([]);
  const [titulo, setTitulo] = useState(true);

  useEffect(() => {
    API.getAllPeople()
      .then((data) => {
        setPeoples(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setTitulo(false)
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
        ) : ( peoples?(
          <div>
            {peoples.map((item) => (
              <PeopleItem {...item} key={item.name} />
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
  
  function getTitle() {
    if (loading) {
      return 'Cargando...';
    } else if (peoples.length > 0) {
      return 'Datos Cargados';
    } else {
      return 'Error al Cargar los Datos';
    }
  }
}


export default App;

