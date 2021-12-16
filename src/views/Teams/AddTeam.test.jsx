import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Route, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import AddTeam from "./AddTeam";
import TeamDetail from "./TeamDetail";

const mockTeam = {
    id: 9,
    created_at: '',
    name: 'redirect',
    city: 'go',
    state: 'GO',
    players: [],
};

const server = setupServer(
    rest.get('url',(req, res, ctx) => {
        return res(ctx.json(mockTeam));
    }),
    rest.post('url',(req, res, ctx) => {
        return res(ctx.json([mockTeam]));
    })
);

beforeAll(() => {
    server.listen();
});

afterAll(() => {
    server.close();
});

xit('should add a team and redirect to the team detail page', async () => {
    const history = createMemoryHistory();
    history.push('/teams/new');

    render(
        <Router history={history}>
        <Route path='/teams/new'>
            <AddTeam />
        </Route>
        <Route path='/teams/:teamId' component={TeamDetail} />
        </Router>
    );

    screen.getByText(/Add a Team/);

    const nameField = screen.getByLabelText(/name/i);
    const cityField = screen.getByLabelText(/city/i);
    const stateField = screen.getByLabelText(/state/i);
    const submitBtn = screen.getByRole('button', { type: 'submit' });

    userEvent.type(nameField, 'A Team');
    userEvent.type(cityField, 'A city');
    userEvent.type(stateField, 'AS');
    userEvent.click(submitBtn);

    await screen.findByText('A Team');
});
