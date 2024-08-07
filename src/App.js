import './App.css';
import React from 'react';
import Header from './Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
