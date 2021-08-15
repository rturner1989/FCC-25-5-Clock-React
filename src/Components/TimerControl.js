import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../Context";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";

const TimerControl = () => {
    const { handleStartStop, reset, sessionTimer, breakTimer, startStop } =
        useGlobalContext();

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
                {startStop ? (
                    <FaPauseCircle aria-hidden={true} focusable={false} />
                ) : (
                    <FaPlayCircle aria-hidden={true} focusable={false} />
                )}
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
                <IoMdRefreshCircle
                    className="reset-btn-icon"
                    aria-hidden={true}
                    focusable={false}
                />
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
