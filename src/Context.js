import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [breakTimer, setBreakTimer] = useState();
    const [sessionTimer, setSessionTimer] = useState();
    const [startStop, setStartStop] = useState(false);

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
        setStartStop(!startStop);
    };

    const clockify = () => {
        const timer = sessionTimer > 0 ? sessionTimer : breakTimer;
        let minutes = Math.floor(timer / 60);
        let seconds = timer - minutes * 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return minutes + ":" + seconds;
    };

    const label = () => {
        return sessionTimer > 0 ? "session" : "break";
    };

    const reset = () => {
        setStartStop(false);
        setBreakLength(5);
        setSessionLength(25);
        setSessionTimer(sessionLength * 60);
    };

    useEffect(() => {
        if (startStop) {
            if (sessionTimer > 0) {
                const time = setInterval(() => {
                    setSessionTimer((timer) => timer - 1);
                }, 1000);
                return () => {
                    clearInterval(time);
                };
            } else if (breakTimer === 0) {
                setSessionTimer(sessionLength * 60);
                setBreakTimer(breakLength * 60);
            } else if (sessionTimer === 0) {
                const time = setInterval(() => {
                    setBreakTimer((timer) => timer - 1);
                }, 1000);
                return () => {
                    clearInterval(time);
                };
            }
        }
    }, [breakTimer, sessionTimer, startStop]);

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
                setBreakLength,
                setSessionLength,
                increment,
                decrement,
                clockify,
                label,
                handleStartStop,
                reset,
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
