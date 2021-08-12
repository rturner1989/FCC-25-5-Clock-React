import React from "react";
import { useGlobalContext } from "../Context";
import TimerControl from "./TimerControl";

const Timer = () => {
    const { breakTimer, sessionTimer, isTimerRunning } = useGlobalContext();

    const clockify = () => {
        const timer = !isTimerRunning ? sessionTimer : breakTimer;
        let minutes = Math.floor(timer / 60);
        let seconds = timer - minutes * 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return minutes + ":" + seconds;
    };

    return (
        <section id="timer-container">
            <h3 id="timer-label">{!isTimerRunning ? "Session" : "Break"}</h3>
            <p id="time-left">{clockify()}</p>
            <TimerControl />
        </section>
    );
};

export default Timer;
