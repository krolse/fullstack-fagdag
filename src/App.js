import './App.css';
import { getData } from './loader/dataLoader.js';
import { useEffect, useState } from 'react';
import Restaurant from './components/Restaurant';

function App() {
  const [data, setData] = useState([]);
  const [loc, setLoc] = useState("");
  useEffect( () => {
    fetchData();
  }, [])

  const fetchData = (location) => {
    const res = location ? getData(location) : getData();
    res.then(value => setData(value))
  }
  
  return (
    <div className="App">
      <input type="text" className="inputSted" onChange={(e) => setLoc(e.target.value)}/>
      <button type="button" onClick={() => fetchData(loc)}>Søk</button>
      <main>
        <div className="grid">
          {data.map(r => 
          <Restaurant name={r.navn} grade={r.total_karakter} location={r.poststed} key={r.tilsynsobjektid} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
