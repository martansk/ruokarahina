/* eslint-disable react/prop-types */
import React from 'react';

/**
 * Component for details of each battle turn.
 * 
 * @param {Object} props Details for the turn in question.
 * @returns Description for the turn in question.
 */
const BattleLine = (props) => {
    return (
        <tr><td>{Math.round(props.turn.time * 10 ) / 10} s.</td><td>{props.attacker.name.fi} lyö ja tekee {Math.round(props.attacker.carbohydrate * 10) / 10} vahinkoa. {props.defender.name.fi} jäi {Math.round(props.defender.energyKcal * 10) / 10} health.</td></tr>
    );
};

export default BattleLine;