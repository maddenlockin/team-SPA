import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router"
import PlayerList from "./PlayerLIst";

it('should render a list of players', async () => {
    render(
        <MemoryRouter>
            <PlayerList />
        </MemoryRouter>
    );

    const player1 = await screen.findByText('Kary Chair');
    const player2 = await screen.findByText('Lampy Vampy');


    expect(player1).toBeInTheDocument();
    expect(player2).toBeInTheDocument();
})