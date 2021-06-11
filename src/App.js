import './App.css';
import { getData } from './loader/dataLoader.js';
import { useEffect, useState } from 'react';
import Restaurant from './components/Restaurant';

function App() {
  const [data, setData] = useState([]);
  useEffect( () => {
    const res = getData()
    res.then(value => setData(value))
  }, [])
  
  console.log(data);

  return (
    <div className="App">
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
