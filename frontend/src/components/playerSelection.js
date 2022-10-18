import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { addData, removeData } from '../reducers/dataReducer';
import { addFilter, removeFilter } from "../reducers/filterReducer";
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
    
    const url = 'http://localhost:3001/api/food/';
    
    const data = useSelector((state) => state.data);
    const filter = useSelector((state) => state.filter);


    const findFoods = (filter) => {
        try {
            if (filter === '') dispatch(removeData()) // if there's no filter, show no data
            else {
                axios
                    .get(url + filter) //e.g. .../api/food/omen
                    .then(response => {
                    dispatch(addData(response.data));
                });
            }
            dispatch(addFilter(filter));
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
        dispatch(addPlayer(playerObject[0]));
        dispatch(removeFilter());
        dispatch(removeData());
    };

    const results = (data) => {
        if (data.length > 100) return "Liikaa hakutuloksia, anna tarkemmat hakuehdot.";
        else return data.map(data =>
        <div key={data.id}> {data.name.fi} <button onClick={() => selectPlayer(data.id)}> valitse </button> </div>
        );
    };
    
    return (
        <div>
      
        Valitse {props.x}. pelaaja:
        
        <form>
          <input
            value={filter}
            onChange={handleFind} />
        </form>

        {results(data)}
  
        </div>
    );
};

export default PlayerSelection;