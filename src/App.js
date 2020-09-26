import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import components
import Room from './useSate/Room';
import Parent from './useContext/Parent';
import Child from './useContext/Child';
import ValueContext from './useContext/ValueContext';
import value from './useContext/ValueContext';

function App() {

  let value= useState(50);
  return (
    
     <ValueContext.Provider value={value}>
       <div>
      {/* <h2>Hello from App.js</h2>  */}
    <Room></Room>
    
    {/* <Parent></Parent> */}
    </div>
    </ValueContext.Provider>
    
    
  );
}

export default App;
