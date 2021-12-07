import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTeamById } from '../../services/teams';

export default function TeamDetail({ label, match }) {
    const { teamId } = match.params;
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        getTeamById(teamId)
        .then((response) => setTeam(response))
        .finally(() => setLoading(false))
    }, [teamId])
    
    if(loading) return <h1>Loading...</h1>
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
                            {player.position} - {player.name}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
