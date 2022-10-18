import axios from 'axios';
import React from 'react';
import './App.css'
import BattleInfo from './components/battleInfo';
import PlayerInfo from './components/playerInfo';
import { useDispatch, useSelector } from 'react-redux'
import { addBattle } from './reducers/battleReducer';
import PlayerSelection from './components/playerSelection';

const App = () => {

    const dispatch = useDispatch()

    const battle = useSelector((state) => state.battle[0]);
    const player = useSelector((state) => state.players);

    const battle_url = 'http://localhost:3001/api/battle/initialize';

    /**
     * Calls the battle backend, which return the battle details as a response.
     * Reponse is then dispatched to battleReducer.
     */
    const startBattle = () => {
      const body = {
        player1: player[0],
        player2: player[1]
      }
      axios.post(battle_url, body)
        .then(response => {
          dispatch(addBattle(response.data))
        });
    }


  if (battle !== undefined) return (
    <div className='App'>
      <BattleInfo />
    </div>
  );

  if (player.length === 2) return (
    <div className="App">
    
    <div className='player-details'>
    <div className='right'>
      <PlayerInfo 
        x={'1'}
        name={player[0].name} 
        energyKcal={player[0].energyKcal}
        carbohydrate={player[0].carbohydrate}
        protein={player[0].protein}
        fat={player[0].fat}
        />
    </div>
    
    <div className='left'>
      <PlayerInfo 
        x={'2'}
        name={player[1].name} 
        energyKcal={player[1].energyKcal}
        carbohydrate={player[1].carbohydrate}
        protein={player[1].protein}
        fat={player[1].fat}
      />

    </div>
    </div>
    
    <div class='startBattle'>
      <button onClick={() => startBattle()}>Aloita taistelu</button>
    </div>
    
    </div>
  )

  if (player.length === 1) return (
    <div className="App">  
      
      <div className='player-details'>
      <div className='right'>
        <PlayerInfo 
          x={'1'}
          name={player[0].name} 
          energyKcal={player[0].energyKcal}
          carbohydrate={player[0].carbohydrate}
          protein={player[0].protein}
          fat={player[0].fat}
        />  
      </div>

      <div className='left'>
        <PlayerSelection x={'2'} /> 
      </div>
      </div>

    </div>
  );

  return (
    <div className='App'>   

      <div className='player-details'>
      <div className='left'>
        <PlayerSelection x={'1'} />
      </div>
      </div>

    </div>
  );
};


export default App;
