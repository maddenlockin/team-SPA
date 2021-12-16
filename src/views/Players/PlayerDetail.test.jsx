import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import PlayerDetail from './PlayerDetail';

const mockTeam1 = {
    id: 1,
    created_at: '',
    name: 'Kicker Bottoms',
    city: 'city one',
    state: 'ST',
    players: [],
};

const server = setupServer(
    rest.get('url', (req, res, ctx) => {
        return res(ctx.json(mockTeam1));
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('should render a detailed view of an individual player', async () => {
    render(
        <MemoryRouter>
        <PlayerDetail match={{ params: { id: '2' } }} />
        </MemoryRouter>
    );

    screen.getByText('Loading...');

    const player = await screen.findByText(/Doris The Cat/);
    expect(player).toBeInTheDocument();
});
