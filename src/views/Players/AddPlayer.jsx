import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { createPlayer } from '../../services/players';
import { getTeams } from '../../services/teams';

export default function AddPlayer() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [chosenTeam, setChosenTeam] = useState('');
    const [teams, setTeams] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getTheTeams() {
            const fetchTeams = await getTeams();
            setTeams(fetchTeams);
        }
        getTheTeams();
    }, [])

    useEffect(() => {
        async function getChosenTeam() {
            if (!chosenTeam) return;

            if (chosenTeam !== 'Choose a Team') {
                setChosenTeam(chosenTeam)
            }
        }
        getChosenTeam();
    }, [chosenTeam])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const teamId = chosenTeam;
        const response = await createPlayer({ name, position, teamId });
        history.push(`/players/${response[0].id}`);
    };

    return (
        <>
            <fieldset>
                <legend>Add a Player</legend>
                <PlayerForm
                    name={name}
                    setName={setName}
                    position={position}
                    setPosition={setPosition}
                    teams={teams}
                    chosenTeam={chosenTeam}
                    setChosenTeam={setChosenTeam}
                    handleSubmit={handleSubmit}
                />
            </fieldset>
        </>
    );
}
