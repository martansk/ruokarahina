import React from "react";

/**
 * Player details component.
 * 
 * @param {Object} props Player
 * @returns Player details
 */
const PlayerInfo = (props) => {
    return (
    <div>
        <div>{props.x}. pelaaja</div>
        <div>{props.name.fi}</div>
        <div>Energia: {Math.round(props.energyKcal * 10) /10}</div>
        <div>Hiilihydraatit: {Math.round(props.carbohydrate * 10) / 10}</div>
        <div>Proteiinit: {Math.round(props.protein * 10) / 10}</div>
        <div>Rasva: {Math.round(props.fat * 10) / 10}</div>
     </div>
    );
};

export default PlayerInfo;