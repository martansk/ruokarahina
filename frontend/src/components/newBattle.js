import React from 'react';
import { useDispatch } from 'react-redux';
import { removePlayer } from '../reducers/playerReducer';
import { removeBattle } from '../reducers/battleReducer';


const NewButton = () => {

    const dispatch = useDispatch();

    /**
     * Clears the redux store for next battle.
     */
    const initializeNewBattle = () => {
        dispatch(removePlayer());
        dispatch(removeBattle());
    };

    return (
        <div>
            <button className='start-battle-button' onClick={(() => initializeNewBattle())}>Aloita uusi taistelu</button>
        </div>
    );
};

export default NewButton;