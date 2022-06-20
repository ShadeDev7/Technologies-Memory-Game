import GameState from "./context/GameState";

import ScoreDisplay from "./components/ScoreDisplay";
import ActionsButton from "./components/ActionsButton";
import GameDisplay from "./components/GameDisplay";

function App() {
    return (
        <GameState>
            <div></div>
        </GameState>
    );
}

export default App;
