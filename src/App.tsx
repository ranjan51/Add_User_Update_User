import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/Example';


function App() {
  const[data,setdata] = useState<any>([])
 
  return (
    <div className="App">
      <Example data={data} setdata={setdata}/>
    </div>
  );
}

export default App;
