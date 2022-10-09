import React, { useState } from "react";
import axios from 'axios';
import Player from "../classes/player";
import PlayerInfo from "./playerInfo";

const PlayerSelectionForm = (id) => {
    const [ data, setData ] = useState([]);
    const [ player, setPlayer ] = useState();
    const [ filter, setFilter ] = useState('');

    const url = 'http://localhost:3001/api/food/';

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
        console.log(playerObject[0]);
        const player = new Player(playerObject[0])
        setPlayer(player);
        setFilter('');
        setData([]);
    };

    const results = (data) => {
        if (data.length > 100) return "Liikaa hakutuloksia, anna tarkemmat hakuehdot.";
        else return data.map(data =>
        <div key={data.id}> {data.name.fi} <button onClick={() => selectPlayer(data.id)}> valitse </button> </div>
        );
    };

    if (player !== undefined) return (
        <PlayerInfo 
            name={player.name} 
            energyKcal={player.energyKcal}
            carbohydrate={player.carbohydrate}
            protein={player.protein}
            fat={player.fat} />
        );
    else return (
        <div>
            <form>
                <input
                value={filter}
                onChange={handleFind} />
            </form>
            {results(data)}
        </div>
    );
};

export default PlayerSelectionForm;