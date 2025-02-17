import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react';

//.............without Use Effect.........

// function App() {
//   const[size,setSize] = useState(0);

//   function handleResize(){
//     setSize(window.innerWidth);
//   }

//   window.addEventListener('resize',handleResize);


//   return (
//     <div className="App">
//       <h3>Size is {size}</h3>
//     </div>
//   );
// }


function App() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount or re-render
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <div className="App">
      <h3>Size is {size}</h3>
    </div>
  );
}

export default App;
