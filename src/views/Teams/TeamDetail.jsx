import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTeamById } from '../../services/teams';

export default function TeamDetail({ match }) {
    const { teamId } = match.params;
    const [team, setTeam] = useState(null);

    useEffect(() => {
        getTeamById(teamId)
        .then((response) => setTeam(response))
    }, [teamId])
    
    if(!team) return <h1>Loading...</h1>

    return (
        <>
            <p>
                <Link to='/teams' className='App-link'>
                    Back to All Teams
                </Link>
            </p>
            <h1>{team.name}</h1>
            <p>
                From {team.city}, {team.state}
            </p>
            <ul>
                {team.players.map((player) => {
                    return (
                        <li key={player.id}>
                            <Link to={`/players/${player.id}`}>{player.name}</Link>
                            - {player.position}
                        </li>
                    )
                })}
            </ul>
            <Link to={`/teams/update/${team.id}`} className='App-link'>
                Edit Team Info
            </Link>
        </>
    )
}
