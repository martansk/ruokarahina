import axios from 'axios';
import React, { useState } from 'react';
import './App.css'
import BattleInfo from './components/battleInfo';
import PlayerInfo from './components/playerInfo';

function App() {

    const [ data, setData ] = useState([]);
    const [ player, setPlayer ] = useState([]);
    const [ filter, setFilter ] = useState('');
    const [ battle, setBattle ] = useState();

    const url = 'http://localhost:3001/api/food/';
    const battle_url = 'http://localhost:3001/api/battle/initialize';

    const findFoods = (filter) => {
        axios
        .get(url + filter) //esim. .../api/food/omen
        .then(response => {
          setData(response.data); // asetetaan paluuarvo data -stateen
        });
        setFilter(filter);
    };

    const handleFind = (event) => {
        findFoods(event.target.value);
    };

    const findByID = (foodObject, id) => {
        return foodObject.filter((foodObject) => {
          return foodObject['id'] === id;
        })
    };
    
    const selectPlayer = (id) => {
        const playerObject = findByID(data, id);
        setPlayer(player.concat(playerObject[0]));
        setFilter('');
        setData([]);
    };

    const results = (data) => {
        if (data.length > 100) return "Liikaa hakutuloksia, anna tarkemmat hakuehdot.";
        else return data.map(data =>
        <div key={data.id}> {data.name.fi} <button onClick={() => selectPlayer(data.id)}> valitse </button> </div>
        );
    };

    const startBattle = () => {
      const body = {
        player1: player[0],
        player2: player[1]
      }
      axios.post(battle_url, body)
        .then(response => setBattle(response.data))
    }

    const initializeNewBattle = () => {
      setData([]);
      setPlayer([]);
      setFilter('');
      setBattle();
    }


  if (battle !== undefined) return (
      <div>
        <div>{player[0].name.fi} VS. {player[1].name.fi}</div>
        <div>{player[0].name.fi} health {Math.round(player[0].energyKcal * 10) / 10}, {player[1].name.fi} health {Math.round(player[1].energyKcal * 10) / 10} </div>
        {battle.map((line) => <BattleInfo 
          key={line.turn.time} 
          turn={line.turn} 
          attacker={line.turn.attacker.fi === line.player1.name.fi ? line.player1 : line.player2} 
          defender={line.turn.attacker.fi !== line.player1.name.fi ? line.player1 : line.player2}
          />)}
          <div>{battle.at(-1).turn.attacker.fi} voitti taistelun!</div>
          <button onClick={(() => initializeNewBattle())}>Aloita uusi taistelu</button>
      </div>
  );

  if (player.length === 2) return (
    <div>
    <PlayerInfo 
      name={player[0].name} 
      energyKcal={player[0].energyKcal}
      carbohydrate={player[0].carbohydrate}
      protein={player[0].protein}
      fat={player[0].fat} />
    <PlayerInfo 
      name={player[1].name} 
      energyKcal={player[1].energyKcal}
      carbohydrate={player[1].carbohydrate}
      protein={player[1].protein}
      fat={player[1].fat} />
    <button onClick={() => startBattle()}>Aloita taistelu</button>
    </div>
  )

  if (player.length === 1) return (
    <div className='right'>
      <PlayerInfo 
          name={player[0].name} 
          energyKcal={player[0].energyKcal}
          carbohydrate={player[0].carbohydrate}
          protein={player[0].protein}
          fat={player[0].fat} />

          Valitse 2. pelaaja:
          <form>
            <input
              value={filter}
              onChange={handleFind} />
          </form>
          {results(data)}
    
          </div>
      );

  return (
    <div className="App">
      <div className='left'>
      
      Valitse 1. pelaaja:
      <form>
        <input
          value={filter}
          onChange={handleFind} />
      </form>
      {results(data)}

      </div>
    </div>
  );
};


export default App;
