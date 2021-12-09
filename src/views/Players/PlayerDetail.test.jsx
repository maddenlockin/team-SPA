import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router"
import PlayerDetail from "./PlayerDetail";

it('should render a player', async () => {
    render(
        <MemoryRouter>
            <PlayerDetail 
                match={{ params: { teamId: '2' } }}
            />
        </MemoryRouter>
    );

    const player = await screen.findByText(/Loading/);


    expect(player).toBeInTheDocument();
})