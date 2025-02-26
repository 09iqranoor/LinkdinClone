import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './Components/Signin';
import Header from './Components/Header';
import Home from './Components/Home';
 
const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          {/* Define the route for Signin component */}
          <Route   path="/" element={<Signin />} />
          <Route   path="/home" element={
            
            <>
            <Header/>
            <Home/>
            </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
  