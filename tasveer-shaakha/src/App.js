import './App.css';
import Popup from './components/Carousel';
import React ,{useState}from 'react';
function App() {
  const [clicked,setClicked] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>setClicked(true)}>Click</button>
      { clicked ? <Popup></Popup> : null }

    </div>
  );
}

export default App;
