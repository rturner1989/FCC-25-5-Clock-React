import React, { useContext, useState, useEffect } from "react";
import { CgPlayButtonR, CgPlayPauseR } from "react-icons/cg";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [breakTimer, setBreakTimer] = useState();
    const [sessionTimer, setSessionTimer] = useState();
    const [startStop, setStartStop] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    // const [mouseFunction, setMouseFunction] = useState(null);

    const increment = (id) => {
        if (!startStop) {
            if (id === "break-increment") {
                if (breakLength < 60) {
                    setBreakLength((prev) => prev + 1);
                }
            } else if (id === "session-increment") {
                if (sessionLength < 60) {
                    setSessionLength((prev) => prev + 1);
                }
            }
        }
    };
    const decrement = (id) => {
        if (!startStop) {
            if (id === "break-decrement") {
                if (breakLength > 1) {
                    setBreakLength((prev) => prev - 1);
                }
            } else if (id === "session-decrement") {
                if (sessionLength > 1) {
                    setSessionLength((prev) => prev - 1);
                }
            }
        }
    };

    const handleStartStop = () => {
        if (startStop) {
            setStartStop(false);
        } else {
            setStartStop(true);
        }
    };

    const togglePlayPauseBtn = () => {
        if (startStop === true) {
            return <CgPlayPauseR aria-hidden={true} focusable={false} />;
        } else {
            return <CgPlayButtonR aria-hidden={true} focusable={false} />;
        }
    };

    const togglePulseEffect = (e) => {
        if (startStop === true) {
            return e.target.classList.add("timer-div");
        } else {
            return null;
        }
    };

    // const decreaseOnMouseDown = () => {
    //     setMouseFunction(
    //         setInterval(() => {
    //             setSessionLength((prev) => prev - 1);
    //         }, 100)
    //     );
    // };

    // const clearOnMouseDown = () => {
    //     clearInterval(mouseFunction);
    //     setMouseFunction(null);
    // };

    const reset = () => {
        setStartStop(false);
        setBreakLength(5);
        setSessionLength(25);
        setSessionTimer(sessionLength * 60);
        setBreakTimer(breakLength * 60);
        setIsTimerRunning(false);
    };

    useEffect(() => {
        if (startStop) {
            let time = null;
            if (sessionTimer >= 0 && !isTimerRunning) {
                time = setTimeout(() => {
                    setSessionTimer((timer) => timer - 1);
                    setBreakTimer(breakLength * 60);
                }, 1000);
            } else if (breakTimer >= 0 && isTimerRunning) {
                time = setTimeout(() => {
                    setBreakTimer((timer) => timer - 1);
                    setSessionTimer(sessionLength * 60);
                }, 1000);
            } else if (sessionTimer <= 0) {
                setIsTimerRunning(true);
            } else if (breakTimer <= 0) {
                setIsTimerRunning(false);
            }
            return () => {
                clearTimeout(time);
            };
        }
    }, [breakTimer, sessionTimer, startStop, isTimerRunning]);

    useEffect(() => {
        setSessionTimer(sessionLength * 60);
        setBreakTimer(breakLength * 60);
    }, [breakLength, sessionLength]);

    return (
        <AppContext.Provider
            value={{
                breakLength,
                sessionLength,
                sessionTimer,
                breakTimer,
                isTimerRunning,
                setBreakLength,
                setSessionLength,
                increment,
                decrement,
                handleStartStop,
                reset,
                togglePlayPauseBtn,
                togglePulseEffect,
                startStop,
                // decreaseOnMouseDown,
                // clearOnMouseDown,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};
