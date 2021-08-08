import React from "react";
import { useGlobalContext } from "../Context";

const TimerControl = () => {
    const { handleStartStop } = useGlobalContext();
    return (
        <div>
            <button id="start_stop" onClick={handleStartStop}>
                Start/Stop
            </button>
            <button id="reset">Reset</button>
        </div>
    );
};

export default TimerControl;
