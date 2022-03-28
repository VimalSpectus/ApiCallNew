import React from 'react';
import './App.css';
import DataShow from './Components/DataShow';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ObjectShow from './Components/ObjectShow';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<DataShow />} />
          <Route path="/:id" element={<ObjectShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
