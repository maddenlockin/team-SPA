import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getPlayers } from '../../services/players';

export default function PlayerList() {
    const { id } = useParams();
    console.log(id);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getPlayers()
        .then((response) => setPlayers(response))
    }, []);

    if(!players) return <h1> Loading...</h1>

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
