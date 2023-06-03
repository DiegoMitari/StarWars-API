import { useState, useEffect } from 'react';
import * as API from './services/utils';
import { PeopleItem } from './components/PeopleItem';

function App() {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    API.getAllPeople().then(
      data => setPeoples(data.results)
    )
  }, []);
  console.log(peoples)
  return (
    <div>
      {peoples.map((item) => (
        <PeopleItem {...item} key={item.name} />
      ))}
    </div>
  )
}

export default App;
