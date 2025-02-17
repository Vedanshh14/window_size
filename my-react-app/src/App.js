import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react';

function App() {
  const[size,setSize] = useState(0);

  
  return (
    <div className="App">
      <h3>Size is {size}</h3>
    </div>
  );
}

export default App;
