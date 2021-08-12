import React from "react";
import { useGlobalContext } from "./Context";
import TimerLengthControl from "./Components/TimerLengthControl";
import Timer from "./Components/Timer";

const App = () => {
    const { breakLength, sessionLength } = useGlobalContext();

    return (
        <div id="app-container">
            <section id="app-header">
                <h1>25 + 5 Clock</h1>
            </section>
            <section id="timer-length-controls">
                <TimerLengthControl
                    titleId="break-label"
                    title="Break Length"
                    incId="break-increment"
                    decId="break-decrement"
                    lengthId="break-length"
                    length={breakLength}
                />
                <TimerLengthControl
                    titleId="session-label"
                    title="Session Length"
                    incId="session-increment"
                    decId="session-decrement"
                    lengthId="session-length"
                    length={sessionLength}
                />
            </section>
            <Timer />
        </div>
    );
};

export default App;
