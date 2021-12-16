import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../../services/teams';

export default function TeamList() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const loadTeamList = async () => {
        setLoading(true);
        const response = await getTeams();
        setTeams(response);
        setLoading(false);
    }

    useEffect(() => {
        loadTeamList();
    }, []);

    const handleDelete = async ({ id, name }) => {
        const confirmation = window.confirm(`Would you like to delete ${name}?`);

        if (confirmation) {
            await deleteTeamById(id);
            await loadTeamList();
        }
    }

    if(loading)return <h1>Loading...</h1>

    return (
        <>
            <Link to='/teams/new' className='App-link'>
                Add a team
            </Link>
            <ul>
                {teams.map((team) => {
                    return <li key={team.id}>
                        <Link to={`/teams/${team.id}`} className='App-link'>
                            {team.name}
                        </Link>
                        <button
                            type='button'
                            aria-label={`Delete ${team.name}`}
                            onClick={() => handleDelete({ id: team.id, name: team.name })}
                        >
                        Delete Team
                        </button>
                    </li>
                })}
            </ul>
            
        </>
    )
}

