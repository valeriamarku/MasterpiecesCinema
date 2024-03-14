import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
            <h1>Welcome to Masterpieces Cinema!</h1>
            <HomePage />
          </>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
