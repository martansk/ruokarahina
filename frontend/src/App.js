import axios from 'axios';
import React, { useState } from 'react';
import './App.css'
import Player from './classes/player';
import PlayerInfo from './components/playerInfo';
import PlayerSelectionForm from './components/playerSelectionForm';

function App() {

  //const [ data, setData ] = useState([]);
  //const [ filter, setFilter ] = useState('');
  //const [ selectionVisible, setSelectionVisible ] = useState(true);
  //const [ player, setPlayer ] = useState();
  const [ player1, setPlayer1 ] = useState();
  const [ player2, setPlayer2 ] = useState();




  return (
    <div className="App">
      <div className='left'>
      
      Valitse 1. pelaaja:
      <PlayerSelectionForm id={1} />

      </div>

      <div className='right'>

      Valitse 2. pelaaja:
      <PlayerSelectionForm id={2} />

      </div>
    </div>
  );
}

export default App;
