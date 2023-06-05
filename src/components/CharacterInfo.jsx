import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function CharacterInfo() {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        const response = await fetch(`API_URL/${id}`);
        const data = await response.json();
        setCharacterInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacterInfo();
  }, [id]);

  return (
    <div>
      <h1>Character Info</h1>
      <p>Name: {characterInfo.name}</p>
      <p>Gender: {characterInfo.gender}</p>
      <p>Height: {characterInfo.height}</p>
      {/* Add more character information as needed */}
    </div>
  );
}

