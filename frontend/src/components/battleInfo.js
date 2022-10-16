import React from "react";

const BattleInfo = (props) => {
    if (props.turn.time === 0) return (
        <div>{props.turn.time} s. Taistelu alkaa</div>
    )
    else return (
        <div>{Math.round(props.turn.time * 10 ) / 10} s. {props.attacker.name.fi} lyö ja tekee {Math.round(props.attacker.carbohydrate * 10) / 10} vahinkoa. {props.defender.name.fi} jäi {Math.round(props.defender.energyKcal * 10) / 10} health.</div>
    )
}

export default BattleInfo;