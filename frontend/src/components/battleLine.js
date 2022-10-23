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
        <tr><td><b>{Math.round(props.turn.time * 10 ) / 10} s.</b></td><td><i>{props.attacker.name.fi}</i> lyö ja tekee <b>{Math.round(props.attacker.carbohydrate * 10) / 10}</b> vahinkoa. <i>{props.defender.name.fi}</i> jäi <b>{Math.round(props.defender.energyKcal * 10) / 10} health.</b></td></tr>
    );
};

export default BattleLine;