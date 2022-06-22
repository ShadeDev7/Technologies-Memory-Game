import GameState from "./context/GameState";

import ScoreDisplay from "./components/ScoreDisplay";
import GameStats from "./components/GameStats";
import ActionsButton from "./components/ActionsButton";
import GameDisplay from "./components/GameDisplay";

function App() {
    return (
        <GameState>
            <div
                className="
                    my-8
                    md:my-0
                    mx-auto
                    w-[97.5%]
                    sm:w-[85%]
                    md:w-[75%]
                    lg:w-[65%]
                    xl:w-[55%]
                    2xl:w-[45%]
                    min-h-screen
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4
                    md:gap-2
                "
            >
                <div className="flex flex-col items-center gap-8 md:gap-12">
                    <ScoreDisplay />

                    <ActionsButton />
                </div>

                <GameStats />

                <GameDisplay />
            </div>
        </GameState>
    );
}

export default App;
