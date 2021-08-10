import React from "react";
import { useGlobalContext } from "../Context";

const TimerControl = () => {
    const { handleStartStop, reset } = useGlobalContext();
    return (
        <div>
            <button id="start_stop" onClick={handleStartStop}>
                Start/Stop
            </button>
            <button id="reset" onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default TimerControl;
