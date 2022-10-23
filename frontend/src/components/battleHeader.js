/* eslint-disable react/prop-types */
import React from 'react';

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

export default BattleHeader;