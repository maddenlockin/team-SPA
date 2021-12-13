import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router"
import TeamList from "./TeamList"
import userEvent from "@testing-library/user-event";

const mockTeam1 = {
    id: 1,
    created_at: '',
    name: 'name it',
    city: 'city one',
    state: 'ST',
    players: []
};

const mockTeam2 = {
    id: 2,
    created_at: '',
    name: 'name two',
    city: 'city two',
    state: 'ATE',
    players: []
}

const mock = [mockTeam1, mockTeam2]

const server = setupServer(
    rest.get('url', (req, res, ctx) => {
        return res(
            ctx.json(mock)
        );
    }),
    rest.delete('url', (req, res, ctx) => {
        return res(ctx.json(mockTeam2));
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

it('should render a list of teams', async () => {
    const {container} = render(
        <MemoryRouter>
            <TeamList />
        </MemoryRouter>
    );

    await screen.findByText(/Add a team/);

    const team = await screen.findByText(/Kicker Bottoms/);
    const teamTwo = await screen.findByText(/The Ball Boys/);
    expect(team).toBeInTheDocument();
    expect(teamTwo).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})
it('should be able to delete a team', async () => {
    window.confirm = jest.fn(() => true);

    render(
        <MemoryRouter>
            <TeamList />
        </MemoryRouter>
    );

    await screen.findByText(/team/);
    const deleteBtn = screen.getByRole('button', { name: 'Delete Kicker Bottoms' });

    userEvent.click(deleteBtn);

    expect(window.confirm).toBeCalled();
    await screen.findByText('Loading...');
    await screen.findByText(/team/);
    });