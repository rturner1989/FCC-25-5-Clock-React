import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timer, setTimer] = useState();
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
        let minutes = Math.floor(timer / 60);
        let seconds = timer - minutes * 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return minutes + ":" + seconds;
    };

    const reset = () => {
        setStartStop(false);
        setBreakLength(5);
        setSessionLength(25);
        setTimer(sessionLength * 60);
    };

    useEffect(() => {
        if (startStop && timer > 0) {
            const time = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
            return () => {
                clearInterval(time);
            };
        } else if (startStop && timer === 0) {
            setTimer(breakLength * 60);
        }
    }, [timer, startStop]);

    useEffect(() => {
        setTimer(sessionLength * 60);
    }, [sessionLength]);

    return (
        <AppContext.Provider
            value={{
                breakLength,
                sessionLength,
                timer,
                setBreakLength,
                setSessionLength,
                increment,
                decrement,
                clockify,
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
