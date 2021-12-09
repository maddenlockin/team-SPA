import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router"
import TeamList from "./TeamList"

it('should render a list of teams', async () => {
    render(
        <MemoryRouter>
            <TeamList />
        </MemoryRouter>
    );

    const team = await screen.findByText('Kicker Bottoms');


    expect(team).toBeInTheDocument();
})