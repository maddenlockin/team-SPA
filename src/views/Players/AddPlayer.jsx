import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { createPlayer } from '../../services/players';
import { getTeams } from '../../services/teams';

export default function AddPlayer() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState(null);
    const [teams, setTeams] = useState(null);
    const history = useHistory();

    useEffect(() => {
      getTeams().then((response) => setTeams(response))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                    setTeamId={setTeamId}
                    handleSubmit={handleSubmit}
                />
            </fieldset>
        </>
    );
}
