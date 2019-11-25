import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from './components/NavBar';
import Main from './components/Main';
import './index.css'
function App() {
  return (
    <div className="App">
      <Router>
      <AppNavbar />
      <Main/>
    </Router>
    </div>
  );
}

export default App;
