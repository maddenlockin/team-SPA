import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deletePlayerById, getPlayers } from '../../services/players';

export default function PlayerList() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadPlayerList = async () => {
        setLoading(true);
        const response = await getPlayers();
        setPlayers(response);
        setLoading(false);
    }

    useEffect(() => {
        loadPlayerList();
    }, []);

    const handleDelete = async ({ id, name }) => {
        const confirmation = window.confirm(`Would you like to delete ${name}?`);

        if (confirmation) {
            await deletePlayerById(id);
            await loadPlayerList();
        }
    }

    if(loading) return <h1>Loading...</h1>

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
                        <button
                            type='button'
                            aria-label={`Delete ${player.name}`}
                            onClick={() => handleDelete({ id: player.id, name: player.name })}
                        >
                        Delete Player
                        </button>
                    </li>
                })}
            </ul>
        </>
    )
}
