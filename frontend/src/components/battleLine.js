import React from 'react';
import PropTypes from 'prop-types';

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

BattleLine.propTypes = {
    turn: PropTypes.shape({
        time: PropTypes.number
    }),
    attacker: PropTypes.shape({
        carbohydrate: PropTypes.number,
        name: PropTypes.shape({
            fi: PropTypes.string
        })
    }),
    defender: PropTypes.shape({
        energyKcal: PropTypes.number,
        carbohydrate: PropTypes.number,
        name: PropTypes.shape({
            fi: PropTypes.string
        })
    })
};

export default BattleLine;