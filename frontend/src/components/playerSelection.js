import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../reducers/playerReducer';
import PropTypes from 'prop-types';

/**
 *
 * Component for searching and selecting players.
 *
 * @param {Object} props Player number (1 or 2) as a string(x) and number(nro).
 * @returns Search form and search results as a dropdown, where player can be selected.
 */
const PlayerSelection = (props) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);

  const url = process.env.REACT_APP_API_BASE_URL + '/api/food/';

  const regex = /(^[a-zA-Zäö\d ]+$)/;

  /**
   * Food search, returns the result to data state.
   * If there's no filter or it's non-valid, shows no data.
   *
   * @param {string} filter Search query
   */
  const findFoods = (filter) => {
    try {
      if (filter === '' || !filter.match(regex)) setData([]);
      else {
        axios
          .get(url + filter) //e.g. .../api/food/omen
          .then((response) => {
            setData(response.data);
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            setData([]);
          });
      }
      setFilter(filter);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleFind = (event) => {
    findFoods(event.target.value);
  };

  /**
   * Searches the selected food from data state by id.
   *
   * @param {Array} foodArray Search results in data state as an array.
   * @param {number} id ID of selected food.
   * @returns Selected food object
   */
  const findByID = (foodArray, id) => {
    return foodArray.filter((foodArray) => {
      return foodArray['id'] === id;
    });
  };

  /**
   * When user selects player, the player object is filtered from data state and dispatched to player state.
   * Filter and data states are set empty.
   *
   * @param {number} id ID of selected player
   */
  const selectPlayer = (id) => {
    const playerObject = findByID(data, id);
    dispatch(addPlayer([playerObject[0], props.nro - 1]));
    setFilter('');
    setData([]);
  };

  const results = (data) => {
    return data.map((data) => (
      <div
        className="dropdown-line"
        key={data.id + props.x}
        onClick={() => selectPlayer(data.id)}
      >
        {data.name.fi}
      </div>
    ));
  };

  return (
    <div className="search-container">
      <div className="player-label">
        <label>
          <b>Valitse {props.x}. pelaaja:</b>
        </label>
      </div>

      <input
        value={filter}
        onChange={handleFind}
        placeholder="Hae ruoan nimellä"
      />

      <div className="dropdown-container">
        <div className="dropdown">{results(data)}</div>
      </div>
    </div>
  );
};

PlayerSelection.propTypes = {
  x: PropTypes.string,
  nro: PropTypes.number,
};

export default PlayerSelection;
