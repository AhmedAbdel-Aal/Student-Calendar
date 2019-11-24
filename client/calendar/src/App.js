import React from 'react';
import './App.css';

import SideBar from './components/Sidebar'
import Calendar from './components/Calendar'
function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Calendar></Calendar>
    </div>
  );
}

export default App;
