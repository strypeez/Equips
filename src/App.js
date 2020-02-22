import React from 'react';
import './App.css';

import InventoryContainer from './Components/InventoryContainer'
import EquippedContainer from './Components/EquippedContainer'
import StatsContainer from './Components/StatsContainer'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Header from './Components/Header'

function App() {

  const containerGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'auto auto auto',
    gridRowGap: '15px',
    gridColumnGap: '20px'
  }

  return (
    <div className="App" style={containerGridStyle}>
      <DndProvider backend = {Backend}>
        <Header />
        <InventoryContainer />
        <EquippedContainer />
        <StatsContainer />
      </DndProvider>
    </div>
  );
}

export default App;
