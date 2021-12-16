import React from 'react'

export default function TeamForm({
    name,
    setName,
    position,
    setPosition,
    teams,
    chosenTeam,
    setChosenTeam,
    handleSubmit
}) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
                id='name'
                name='name'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            <label htmlFor='position'>Position:</label>
            <input
                id='position'
                name='position'
                type='text'
                value={position}
                onChange={({ target }) => setPosition(target.value)}
            />
            
            <select value={chosenTeam} onChange={({ target }) => setChosenTeam(target.value)}>
                <option key={0} value={0}>
                    Choose a Team
                </option>
                {teams.map((team) => {
                    return (
                    <option key={team.id} value={team.id}> 
                        {team.name}
                    </option>
                    )
                })}
            </select>
            <button type='submit' aria-label='Submit'>
                Submit
            </button>
        </form>
    )
}