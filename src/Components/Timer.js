import React from "react";
import { useGlobalContext } from "../Context";
import TimerControl from "./TimerControl";

const Timer = () => {
    const { clockify, label } = useGlobalContext();
    return (
        <div id="timer-container">
            <h3 id="timer-label">{label()}</h3>
            <p id="time-left">{clockify()}</p>
            <TimerControl />
        </div>
    );
};

export default Timer;
