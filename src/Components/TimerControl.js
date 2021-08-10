import React from "react";
import { useGlobalContext } from "../Context";
import { BsArrowRepeat } from "react-icons/bs";

const TimerControl = () => {
    const { handleStartStop, reset, toggle } = useGlobalContext();

    return (
        <div>
            <button id="start_stop" onClick={handleStartStop}>
                <span className="label-hidden">Start/Stop</span>
                {toggle()}
            </button>
            <button id="reset" onClick={reset}>
                <span className="label-hidden">Reset</span>
                <BsArrowRepeat aria-hidden={true} focusable={false} />
            </button>
        </div>
    );
};

export default TimerControl;
