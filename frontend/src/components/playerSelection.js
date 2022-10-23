import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { addPlayer } from "../reducers/playerReducer";

/**
 * 
 * Component for searching and selecting players.
 * 
 * @param {string} props Player number (1 or 2)
 * @returns Search form and search results with "select"-button.
 */
const PlayerSelection = (props) => {
    
    const dispatch = useDispatch();
    const [ filter, setFilter ] = useState('');
    const [ data, setData ] = useState([]);
    
    const url = 'http://localhost:3001/api/food/';

    const findFoods = (filter) => {
        try {
            if (filter === '') setData([]); // if there's no filter, show no data
            else {
                axios
                    .get(url + filter) //e.g. .../api/food/omen
                    .then(response => {
                    setData(response.data);
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

    const findByID = (foodObject, id) => {
        return foodObject.filter((foodObject) => {
          return foodObject['id'] === id;
        })
    };

    const selectPlayer = (id) => {
        const playerObject = findByID(data, id);
        dispatch(addPlayer( [ playerObject[0], props.nro-1 ]));
        setFilter('');
        setData([]);
    };

    const results = (data) => {
        if (data.length > 100) return "Liikaa hakutuloksia, anna tarkemmat hakuehdot.";
        else return data.map(data => 
            <div className="dropdown-line" key={data.id} onClick={() => selectPlayer(data.id)}> {data.name.fi}</div>
        );
    };
    
    return (
      
        <div className="search-container">
      
        <form>
        
        <div className="player-label">
            <label><b>Valitse {props.x}. pelaaja:</b></label>
        </div>

        <div className="inner-container">
        <input
            value={filter}
            onChange={handleFind}
            placeholder='Hae ruoan nimellä' />
        </div>
        </form>
        <div className="dropdown">
        {results(data)}
        </div>

        <div className='image-container'></div>

        </div>
    );
};

export default PlayerSelection;