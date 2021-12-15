import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import TeamForm from '../../components/Teams/TeamForm';
import { getTeamById, updateTeamById } from '../../services/teams';

export default function UpdateTeam() {
    const { teamId } = useParams();
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        async function getTeam(){
            const { name, city, state } = await getTeamById(teamId)
            setName(name)
            setCity(city)
            setState(state)
            setLoading(false)
        }
        getTeam()
    }, [teamId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await updateTeamById(teamId, { name, city, state });
        history.push(`/teams/${response[0].id}`);
    };

    if(loading) return <h1>Loading...</h1>

    return (
        <>
            <fieldset>
                <legend>Edit Team Info</legend>
                <TeamForm
                    name={name}
                    setName={setName}
                    city={city}
                    setCity={setCity}
                    state={state}
                    setState={setState}
                    handleSubmit={handleUpdate}
                />
            </fieldset>
            <Link to='/teams' className='App-link'>
                Back to Teams List
            </Link>
        </>
    );
}
