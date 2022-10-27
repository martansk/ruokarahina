import React from 'react';
import { useSelector } from 'react-redux';
import BattleLine from './battleLine';
import BattleHeader from './battleHeader';
import NewButton from './newBattle';

/**
 * Component for battle description.
 * After description, there is a button for initializing new battle.
 * 
 * @returns Battle description turn by turn.
 */
const BattleInfo = () => {
    const battle = useSelector((state) => state.battle[0]); // battle description is in 0th index of state
    const player = useSelector((state) => state.players);

    if (battle.length === 0) return (
        <div>

            {/* Initial player details */}
            <BattleHeader player1={player[0]} player2={player[1]} />

            <div>Kumpikaan ei jaksanut taistella, vaan {player[0].name.fi} ja {player[1].name.fi} lähtivät yhdessä kaljalle.</div>
            
            {/* Start a new battle */}
            <NewButton />

        </div>
    );


    return (
        <div className='battle'>

            {/* Initial player details */}
            <BattleHeader player1={player[0]} player2={player[1]} />
        
            <table className='battle-table'>
                <tbody>
                    {/* Battle begins */}
                    <tr><td><b>0 s.</b></td><td>Taistelu alkaa.</td></tr>
                    {Object.entries(battle).map((entry) => {
                        // eslint-disable-next-line no-unused-vars
                        const [key, value] = entry;
                        return <BattleLine key={value.turn.time} 
                            turn={value.turn} 
                            attacker={value.turn.attacker.fi === value.player1.name.fi ? value.player1 : value.player2} 
                            defender={value.turn.attacker.fi !== value.player1.name.fi ? value.player1 : value.player2}
                        />;})
                    }
                </tbody>
            </table>

            {/* Winner details */}
            <div className='winner-details'><b>{Object.values(battle).at(-1).turn.attacker.fi} voitti taistelun!</b></div>
        
            {/* Start a new battle */}
            <NewButton />

        </div>
    );
};

export default BattleInfo;