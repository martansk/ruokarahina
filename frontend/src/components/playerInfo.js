import React from "react";

const PlayerInfo = (props) => {
    return (
    <div>
        <div>x pelaaja</div>
        <div>{props.name.fi}</div>
        <div>Energia: {props.energyKcal}</div>
        <div>Hiilihydraatit: {props.carbohydrate}</div>
        <div>Proteiinit: {props.protein}</div>
        <div>Rasva: {props.fat}</div>
     </div>
    );
};

export default PlayerInfo