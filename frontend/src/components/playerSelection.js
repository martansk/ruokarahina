import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../reducers/playerReducer';
import PropTypes from 'prop-types';


/**
 * 
 * Component for searching and selecting players.
 * 
 * @param {string} props Player number (1 or 2)
 * @returns Search form and search results with "select"-button.
 */
const PlayerSelection = (props) => {
    
    const dispatch = useDispatch();
    const [ filter, setFilter ] = useState('');
    const [ data, setData ] = useState([]);
    
    //const url = process.env.REACT_APP_API_BASE_URL + '/api/food/';
    const url = '/api/food/';

    const regex = /(^[a-zA-Zäö\d ]+$)/;

    const findFoods = (filter) => {
        try {
            if (filter === '') setData([]); // if there's no filter, show no data
            else if (!filter.match(regex)) setData([]); // if filter is non-valid, show no data
            else {
                axios
                    .get(url + filter) //e.g. .../api/food/omen
                    .then(response => {
                        setData(response.data);
                    // eslint-disable-next-line no-unused-vars
                    }).catch(error => {
                        setData([]);
                    });
            }
            setFilter(filter);
        } catch (e) {
            console.log(e.message);
        }
    };
    
    const handleFind = (event) => {
        findFoods(event.target.value);
    };

    const findByID = (foodObject, id) => {
        return foodObject.filter((foodObject) => {
            return foodObject['id'] === id;
        });
    };

    const selectPlayer = (id) => {
        const playerObject = findByID(data, id);
        dispatch(addPlayer( [ playerObject[0], props.nro-1 ]));
        setFilter('');
        setData([]);
    };

    const results = (data) => {
        return data.map(data => 
            <div className='dropdown-line' key={data.id+props.x} onClick={() => selectPlayer(data.id)}>{data.name.fi}</div>
        );
    };
    
    return (     
        <div className='search-container'>      
            <div className='player-label'>
                <label><b>Valitse {props.x}. pelaaja:</b></label>
            </div>


            <input
                value={filter}
                onChange={handleFind}
                placeholder='Hae ruoan nimellä' />

            <div className='dropdown-container'>
                <div className='dropdown'>
                    {results(data)}
                </div>
            </div>
        </div>
    );
};

PlayerSelection.propTypes = {
    x: PropTypes.string,
    nro: PropTypes.number
};

export default PlayerSelection;