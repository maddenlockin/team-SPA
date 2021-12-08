import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

export default function PlayerList() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlayers()
        .then((response) => setPlayers(response))
        .finally(() => setLoading(false))
    }, []);

    if(loading) return <h1> Loading...</h1>
    
    return (
        <>
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
