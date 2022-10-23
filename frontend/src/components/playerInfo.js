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
                <table className='player-table'>
                    <tr><td>Energia:</td> <td>{Math.round(props.energyKcal * 10) / 10}</td></tr>
                    <tr><td>Hiilihydraatit:</td> <td>{Math.round(props.carbohydrate * 10) / 10}</td></tr>
                    <tr><td>Proteiinit:</td> <td>{Math.round(props.protein * 10) / 10}</td></tr>
                    <tr><td>Rasva:</td> <td>{Math.round(props.fat * 10) / 10}</td></tr>
                </table>
                <div>
                    <button onClick={() => removePlayer(props.x)}>Vaihda pelaajaa</button>
                </div>
            </div>
            {/*<div className="image-container"></div>*/}
        </div>
    );
};

export default PlayerInfo;