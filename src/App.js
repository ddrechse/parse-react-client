import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';  // Always have
import { _serializeObjectsFromPinName } from 'parse/lib/browser/LocalDatastore';
import Input from './Components/Input';
import Query from './Components/Query'



function App() {
  const [objectId, setObjectId] = useState("CbqyHwsccH")

  const handleObjectId = (e) => {
      setObjectId(e.target.value)
  }

  console.log(objectId)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome from home page</h1>

        <Input handleObjectId={handleObjectId}/>
        <Query objectId={objectId}/>
      </header>
    </div>
  );
}

export default App;
