import './App.css';
import { getData } from './loader/dataLoader.js';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect( () => {
    const res = getData()
    res.then(value => setData(value))
  }, [])
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
