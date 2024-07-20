
import { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './components/Tours';

function App() {

  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter (tour => tour.id !== id);
    setTours(newTours);
  }

  // if UI having not any tours card show then show this function value on the UI
  if(tours.length ===0) {
    return (
        <div className='refresh'>
          <h2 className="heading">No Tours Left</h2>
          <button className="btn-white" onClick={ () => setTours(data)}>Refresh</button>
        </div>
    );
  }


  return (
    
      <div className="App">
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    
  );
}

export default App;
