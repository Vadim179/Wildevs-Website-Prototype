import GameCard from "./GameCard"

const Games = () => {
    return (
        <div id="games">
            <h1>Our Games</h1>
            <h2>Discover a new world</h2>
            <div className="games-showcase">
                <GameCard />
                <GameCard />
                <GameCard />
            </div>
        </div>
    )
}

export default Games
