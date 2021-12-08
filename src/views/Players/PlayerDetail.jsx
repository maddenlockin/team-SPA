import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getPlayerById } from "../../services/players";


export default function PlayerDetail() {
    const { playerId } = useParams();
    const [player, setPlayer] = useState(null);
    
    useEffect(() => {
        getPlayerById(playerId)
        .then((response) => setPlayer(response))
    }, [playerId])

    if(!player) return <h1> Loading...</h1>

    return (
        <>
            <p>
                <Link to='/players'
                className='App-link'>
                    Back to Players
                </Link>
            </p>
            <h1>{player.name}</h1>
            <h2>{player.position}</h2>
            <p> 
                {player.teams.city}, {player.teams.state}
            </p>
            <p>
                {' '}
                <Link to={`/teams/${player.team.id}`}>{player.teams.name}</Link>
            </p>
        </>
    )
}
