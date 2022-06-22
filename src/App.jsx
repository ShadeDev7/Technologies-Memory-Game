import GameState from "./context/GameState";

import ScoreDisplay from "./components/ScoreDisplay";
import ActionsButton from "./components/ActionsButton";
import GameDisplay from "./components/GameDisplay";

function App() {
    return (
        <GameState>
            <div
                className="
                    my-4
                    md:my-0
                    mx-auto
                    w-[97.5%]
                    sm:w-11/12
                    md:w-10/12
                    lg:w-9/12
                    xl:w-8/12
                    2xl:w-1/2
                    min-h-screen
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-8
                    md:gap-12
                "
            >
                <div className="mx-auto w-full flex flex-col items-center gap-6">
                    <ScoreDisplay />

                    <ActionsButton />
                </div>

                <GameDisplay />
            </div>
        </GameState>
    );
}

export default App;
