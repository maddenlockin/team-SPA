import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { createPlayer } from '../../services/players';

export default function AddPlayer() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState(null);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createPlayer({ name, position, teamId });
        history.push(`/players/${response[0].id}`);
    };

    return (
        <>
            <fieldset>
                <legend>Add a Team</legend>
                <PlayerForm
                    name={name}
                    setName={setName}
                    position={position}
                    setPosition={setPosition}
                    teamId={teamId}
                    setTeamId={setTeamId}
                    handleSubmit={handleSubmit}
                />
            </fieldset>
        </>
    );
}
