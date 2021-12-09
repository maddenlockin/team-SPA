import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router"
import TeamDetail from "./TeamDetail";

it('should render a list of teams', async () => {
    render(
        <MemoryRouter>
            <TeamDetail 
                match={{ params: { teamId: '2' } }}
            />
        </MemoryRouter>
    );

    const team = await screen.findByText('Kicker Bottoms');


    expect(team).toBeInTheDocument();
})