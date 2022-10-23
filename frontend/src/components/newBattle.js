import React from 'react';
import { useDispatch } from 'react-redux';
import { removeData } from '../reducers/dataReducer';
import { removeFilter } from '../reducers/filterReducer';
import { removePlayer } from '../reducers/playerReducer';
import { removeBattle } from '../reducers/battleReducer';


const NewButton = () => {

    const dispatch = useDispatch();

    /**
     * Clears the redux store for next battle.
     */
    const initializeNewBattle = () => {
        dispatch(removeData());
        dispatch(removePlayer());
        dispatch(removeFilter());
        dispatch(removeBattle());
    };

    return (
        <div>
            <button onClick={(() => initializeNewBattle())}>Aloita uusi taistelu</button>
        </div>
    );
};

export default NewButton;