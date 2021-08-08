import React from "react";
import TimerControl from "./TimerControl";

const Timer = () => {
    return (
        <div id="timer-container">
            <p id="timer-label">Session</p>
            <p id="time-left">00:00</p>
            <TimerControl />
        </div>
    );
};

export default Timer;
