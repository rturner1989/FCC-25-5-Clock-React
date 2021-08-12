import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../Context";
import { BsArrowRepeat } from "react-icons/bs";

const TimerControl = () => {
    const {
        handleStartStop,
        reset,
        sessionTimer,
        breakTimer,
        togglePlayPauseBtn,
    } = useGlobalContext();

    const audioRef = useRef(null);

    useEffect(() => {
        if (sessionTimer === 0 || breakTimer === 0) {
            audioRef.current.play();
            audioRef.current.currentTime = 1;
        }
    }, [sessionTimer, breakTimer]);

    return (
        <div id="timer-control-container">
            <button
                id="start_stop"
                className="timer-btn-control"
                onClick={handleStartStop}
            >
                <span className="label-hidden">Start/Stop</span>
                {togglePlayPauseBtn()}
            </button>
            <button
                id="reset"
                className="timer-btn-control"
                onClick={() => {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                    reset();
                }}
            >
                <span className="label-hidden">Reset</span>
                <BsArrowRepeat aria-hidden={true} focusable={false} />
            </button>
            <audio
                id="beep"
                preload="auto"
                ref={audioRef}
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
        </div>
    );
};

export default TimerControl;
