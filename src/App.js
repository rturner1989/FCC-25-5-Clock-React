import React from "react";
import { useGlobalContext } from "./Context";
import TimerLengthControl from "./Components/TimerLengthControl";
import Timer from "./Components/Timer";

const App = () => {
    const { breakLength, sessionLength, setBreakLength, setSessionLength } =
        useGlobalContext();
    return (
        <div id="app-container">
            <h1>25 + 5 Clock</h1>
            <section id="timer-length-controls">
                <TimerLengthControl
                    titleId="break-label"
                    title="Break Length"
                    incId="break-increment"
                    decId="break-decrement"
                    lengthId="break-length"
                    length={breakLength}
                    onClick={setBreakLength}
                />
                <TimerLengthControl
                    titleId="session-label"
                    title="Session Length"
                    incId="session-increment"
                    decId="session-decrement"
                    lengthId="session-length"
                    length={sessionLength}
                    onClick={setSessionLength}
                />
            </section>
            <Timer />
        </div>
    );
};

export default App;
