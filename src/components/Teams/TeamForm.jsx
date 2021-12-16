import React from 'react'

export default function PlayerForm({
    name,
    setName,
    city,
    setCity,
    state,
    setState,
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
            />{' '}
            <label htmlFor='city'>City:</label>
            <input
                id='city'
                name='city'
                type='text'
                value={city}
                onChange={({ target }) => setCity(target.value)}
            />{' '}
            <label htmlFor='state'>State:</label>
            <input
                id='state'
                name='state'
                type='text'
                value={state}
                onChange={({ target }) => setState(target.value)}
            />{' '}
            <button type='submit' aria-label='Submit'>
                Submit
            </button>
        </form>
    )
}
