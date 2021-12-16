import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router"
import userEvent from "@testing-library/user-event";
import PlayerList from "./PlayerLIst";

const mockPlayer1 = {
    id: 1,
    created_at: '',
    name: 'Name Too',
    position: 'Outfield',
    team_id: 1
};

const mockPlayer2 = {
    id: 2,
    created_at: '',
    name: 'Name You',
    position: 'Poutfield',
    team_id: 1
}

const mock = [mockPlayer1, mockPlayer2]

const server = setupServer(
    rest.get('url', (req, res, ctx) => {
        return res(
            ctx.json(mock)
        );
    }),
    rest.delete('url', (req, res, ctx) => {
        return res(ctx.json(mockPlayer2));
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('should render a list of players', async () => {
    const {container} = render(
        <MemoryRouter>
            <PlayerList />
        </MemoryRouter>
    );

    const player = await screen.findByText(/Boppy Boop/);
    const playerTwo = await screen.findByText(/Finney The Elder Cat/);
    expect(player).toBeInTheDocument();
    expect(playerTwo).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})
