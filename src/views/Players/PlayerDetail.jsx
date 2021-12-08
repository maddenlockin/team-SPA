import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getPlayerById } from "../../services/players";


export default function PlayerDetail() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    
    useEffect(() => {
        getPlayerById(id)
        .then((response) => setPlayer(response))
    }, [id])

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
                <Link to={`/teams/${player.team_id}`}>{player.teams.name}</Link>
            </p>
        </>
    )
}
