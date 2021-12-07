import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams';

export default function TeamList() {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        getTeams().then((response) => setTeams(response))
    }, []);

    return (
        <>
            <ul>
                {teams.map((team) => {
                    return <li key={team.id}>
                        <Link to={`/teams/${team.id}`} className='App-link'>
                            {team.name}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}

