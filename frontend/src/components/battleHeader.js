import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header for battle.
 */
const BattleHeader = (props) => {

    return (
        <div className='header-container'>
            <div className='battle-header'>
                <div className='battle-header-player1'>
                    <div className='vs-header'>
                        <h3>{props.player1.name.fi}</h3>
                    </div>
                    <div className='health-header'>
                    Health <b>{Math.round(props.player1.energyKcal * 10) / 10}</b>       
                    </div>
                </div>
                <div className='battle-header-player2'>
                    <div className='vs-header'>
                        <h3>{props.player2.name.fi}</h3>
                    </div>
                    <div className='health-header'>
                    Health <b>{Math.round(props.player2.energyKcal * 10) / 10}</b>       
                    </div>
                </div>
            </div>

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