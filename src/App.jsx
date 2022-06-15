import './app.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import React from 'react'
import Rightbar from './components/rightbar/Rightbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <Sidebar />
      <Home />
      <Rightbar />
    </div>
    </>
  );
}

export default App;
