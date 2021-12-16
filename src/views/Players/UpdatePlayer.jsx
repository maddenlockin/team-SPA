import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { getPlayerById, updatePlayerById } from '../../services/players';
import { getTeams } from '../../services/teams';

export default function UpdatePlayer() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [chosenTeam, setChosenTeam] = useState('');
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {

      async function getTheTeams() {
        const fetchTeams = await getTeams();
        setTeams(fetchTeams);
        setLoading(false);
      }
      getTheTeams();
    }, []);

    useEffect(() => {
        async function getPlayer(){
            const { name, position, chosenTeam } = await getPlayerById(id)
            setName(name)
            setPosition(position)
            setChosenTeam(chosenTeam)
            setLoading(false)
        }
        getPlayer()
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await updatePlayerById(id, { name, position });
        history.push(`/players/${response[0].id}`);
    };

    if(loading) return <h1>Loading...</h1>

    return (
        <>
            <fieldset>
                <legend>Edit Player Info</legend>
                <PlayerForm
                    name={name}
                    setName={setName}
                    position={position}
                    setPosition={setPosition}
                    chosenTeam={chosenTeam}
                    setChosenTeam={setChosenTeam}
                    handleSubmit={handleUpdate}
                    teams={teams}
                />
            </fieldset>
            <Link to='/players' className='App-link'>
                Back to Player List
            </Link>
        </>
    );
}