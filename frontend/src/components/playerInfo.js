/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeOnePlayer } from '../reducers/playerReducer';

/**
 * Player details component.
 * 
 * @param {Object} props Player
 * @returns Player details
 */
const PlayerInfo = (props) => {
    
    const dispatch = useDispatch();
    
    const removePlayer = (x) => {
        dispatch(removeOnePlayer(x-1));
    };

    return (
        <div className="search-container">
            <div className="player-info">
                <div>{props.x}. pelaaja</div>
                <div><b>{props.name.fi}</b></div>
                <div>Energia: {Math.round(props.energyKcal * 10) /10}</div>
                <div>Hiilihydraatit: {Math.round(props.carbohydrate * 10) / 10}</div>
                <div>Proteiinit: {Math.round(props.protein * 10) / 10}</div>
                <div>Rasva: {Math.round(props.fat * 10) / 10}</div>
            </div>
            <div className="image-container"></div>
            <button onClick={() => removePlayer(props.x)}>Vaihda pelaajaa</button>
        </div>
    );
};

export default PlayerInfo;