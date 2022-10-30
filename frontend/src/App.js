import axios from 'axios';
import React from 'react';
import './App.css';
import BattleInfo from './components/battleInfo';
import PlayerInfo from './components/playerInfo';
import { useDispatch, useSelector } from 'react-redux';
import { addBattle } from './reducers/battleReducer';
import PlayerSelection from './components/playerSelection';

const App = () => {
  const dispatch = useDispatch();

  const battle = useSelector((state) => state.battle[0]);
  const player = useSelector((state) => state.players);

  const battle_api =
    process.env.REACT_APP_API_BASE_URL + '/api/battle/initialize';

  /**
   * Calls the battle backend, which return the battle details as a response.
   * Reponse is then dispatched to battleReducer.
   */
  const startBattle = () => {
    const body = {
      player1: player[0],
      player2: player[1],
    };
    axios.post(battle_api, body).then((response) => {
      dispatch(addBattle(response.data));
    });
  };

  if (battle !== undefined)
    return (
      <div className="App">
        <BattleInfo />
      </div>
    );

  return (
    <div className="App">
      <div className="player-details">
        <div className="left">
          {Object.keys(player[0]).length === 0 ? (
            <PlayerSelection nro={1} x={'1'} />
          ) : (
            <PlayerInfo
              x={'1'}
              name={player[0].name}
              energyKcal={player[0].energyKcal}
              carbohydrate={player[0].carbohydrate}
              protein={player[0].protein}
              fat={player[0].fat}
              id={player[0].id}
            />
          )}
        </div>

        <div className="right">
          {Object.keys(player[1]).length === 0 ? (
            <PlayerSelection nro={2} x={'2'} />
          ) : (
            <PlayerInfo
              x={'2'}
              name={player[1].name}
              energyKcal={player[1].energyKcal}
              carbohydrate={player[1].carbohydrate}
              protein={player[1].protein}
              fat={player[1].fat}
              id={player[1].id}
            />
          )}
        </div>
      </div>
      <div className="startBattle">
        {Object.keys(player[0]).length !== 0 &&
        Object.keys(player[1]).length !== 0 ? (
            <button className="start-battle-button" onClick={() => startBattle()}>
            Aloita taistelu
            </button>
          ) : (
            <button className="start-battle-button" disabled>
            Aloita taistelu
            </button>
          )}
      </div>
    </div>
  );
};

export default App;
