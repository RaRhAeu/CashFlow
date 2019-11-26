import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from './components/AppNavBar';
import Container from './components/Container';
import './index.css'
function App() {
  return (
    <div className="App">
    <Router>
      <AppNavbar />
      <Container />
    </Router>
    </div>
  );
}

export default App;
