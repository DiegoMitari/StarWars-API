import { useState, useEffect } from 'react';
import * as API from './services/utils';
import { PeopleItem, getCharacterInfo } from './components/PeopleItem';
import { Navbar } from './components/Navbar';
import './style/loader.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [peoples, setPeoples] = useState([]);
  const [error, setError] = useState(false);
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    API.getAllPeople()
      .then((data) => {
        setPeoples(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleCharacterClick = async (people) => {
    setLoading(true);
    try {
      const info = await getCharacterInfo(people.url);
      setCharacterInfo(info);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar titulo={loading ? '' : 'People'} />
      {loading ? (
        <div className="loader">
          <div className="lds-spinner"></div>
          <div className="loader-text">Cargando...</div>
        </div>
      ) : (
        <>
          {error ? (
            <div>
              <h1>Failed to Load Data</h1>
            </div>
          ) : (
            <div>
              {peoples.map((item) => (
                <PeopleItem
                  {...item}
                  key={item.name}
                  onClick={() => handleCharacterClick(item)}
                />
              ))}
            </div>
          )}
          {characterInfo && (
            <div>
              <h3>Character Information</h3>
              <ul>
                <li>Name: {characterInfo.name}</li>
                <li>Gender: {characterInfo.gender}</li>
                <li>Homeworld: {characterInfo.homeworld}</li>
                <li>Species: {characterInfo.species}</li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App
