import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

export default function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getPlayers()
        .then((response) => setPlayers(response))
    }, []);

    if(!players) return <h1>Loading...</h1>

    return (
        <>
            <Link to='/players/new' className='App-link'>
                Add a player
            </Link>
            <ul>
                {players.map((player) => {
                    return <li key={player.id}>
                        <Link to={`/players/${player.id}`} 
                        className= 'App-link'>
                            {player.name}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}
