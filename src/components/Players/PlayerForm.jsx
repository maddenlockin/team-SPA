import React from 'react'

export default function TeamForm({
    name,
    setName,
    position,
    setPosition,
    teams,
    setTeam,
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
            {teams ? (
                <>
                    <label htmlFor='select-team'>Team:</label>
                    <select id='select-team' onChange={({target}) => setTeam(target)}>
                        {teams.map((team) => (
                            <option key={team.teamId} value={team.teamId}> 
                                {team.name}
                            </option>
                        ))}
                    </select>
                </>
            ) : (
                ''
            )
          }

            <button type='submit' aria-label='Submit'>
                Submit
            </button>
        </form>
    )
}