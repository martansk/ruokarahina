import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header for battle.
 */
const BattleHeader = (props) => {

    return (
        <div className='battle-header'>
            <div className='vs-header'><h3>{props.player1.name.fi} VS. {props.player2.name.fi}</h3></div>
            <div className='health-header'>{props.player1.name.fi} health <b>{Math.round(props.player1.energyKcal * 10) / 10}</b>, {props.player2.name.fi} health <b>{Math.round(props.player2.energyKcal * 10) / 10}</b> </div>
        </div>
    );
};

BattleHeader.propTypes = {
    player1: PropTypes.shape({
        energyKcal: PropTypes.number,
        name: PropTypes.shape({
            fi: PropTypes.string
        })
    }),
    player2: PropTypes.shape({
        energyKcal: PropTypes.number,
        name: PropTypes.shape({
            fi: PropTypes.string
        })
    })
};

export default BattleHeader;